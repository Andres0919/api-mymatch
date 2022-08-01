'use strict'
// const fastify = require('fastify')({ logger: true })
import fastify, {FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions} from 'fastify'

'use strict'
import { IHttpFramework } from '../../../Interfaces/FrameworkApi'
import express, { Application, Request, Response } from 'express'
import pino from 'express-pino-logger'
import cors from '@fastify/cors'
import helmet from 'helmet'
import morgan from 'morgan'

import IRouteConfig, {
  RouteOptions,
  Schema,
} from '../../../Interfaces/RouteConfig'
import {
  IResponse,
  responseError,
  responseSuccess,
} from '../../../utils/response'
import { replyUser } from '../../../api/users/schema'

export default class FastifyFramework implements IHttpFramework {
  private app: FastifyInstance

  constructor() {
    this.app = fastify({ logger: true })
    this.initPlugins()
  }

  private initPlugins() {
    this.app.register(cors)
  //   this.app.use(helmet())
  //   this.app.use(express.urlencoded({ extended: false }))
  //   this.app.use(express.json({ limit: '13mb', type: 'application/json' }))
  //   this.app.use(morgan(':method :url :status :date'))
  //   this.app.use(
  //     pino({
  //       prettyPrint: true,
  //       autoLogging: false,
  //     })
  //   )
  }

  async isValidSchema(req: FastifyRequest, schema: Schema): Promise<void> {
    if ('body' in schema) {
      try {
        const { error } = await schema.body?.items.validate(req.body)
        if (error) {
          // req.log.error(error)
          throw { message: 'Error en el cuerpo de la petición', status: 400 }
        }
      } catch (error) {
        throw { message: 'Error en el cuerpo de la petición', status: 400 }
      }
    }
  }

  private async executeRoute(
    req: FastifyRequest,
    res: FastifyReply,
    options: RouteOptions = {}
  ): Promise<any> {
    let response!: IResponse
    try {
      let result
      const {
        schema,
        handler,
        middleware,
        message,
        replySchema = {},
        status = 200,
      } = options

      // if (schema) await this.isValidSchema(req, schema)

      // if (middleware && typeof middleware === 'function') {
      //   await middleware(req)
      // }

      if (handler && typeof handler === 'function') {
        result = await handler(req)
      }

      // if (replySchema && Object.keys(replySchema).length !== 0) {
      //   if (Array.isArray(result)) {
      //     result = result.map((res) => {
      //       for (const key in res) {
      //         if (!Object.prototype.hasOwnProperty.call(replySchema, key)) {
      //           delete res[key]
      //         }
      //       }

      //       return res
      //     })
      //   } else if (
      //     typeof result === 'object' &&
      //     result !== null &&
      //     Object.keys(result).length !== 0
      //   ) {
      //     for (const key in result) {
      //       if (!Object.prototype.hasOwnProperty.call(replySchema, key)) {
      //         delete result[key]
      //       }
      //     }
      //   }
      // }
      response = responseSuccess(result, message, status)
    } catch (error) {
      console.log(error)
      response = responseError(null)
    } finally {
      return res.status(response.status).send(response)
    }
  }

  public initHttpRoutes(
    routeList: IRouteConfig[],
    { globalPrefix }: { globalPrefix: string }
  ) : void {

    for (const routeConfig of routeList) {
      for (const route of routeConfig.routes) {
        const routeMethod = route.method || 'get'
        const routeFullPath = `/${globalPrefix}/${routeConfig.moduleName}${route.path !== '/' ? route.path : ''}`
        this.app[routeMethod](
          routeFullPath,
          async (req, res): Promise<void> =>
            await this.executeRoute(req, res, route.options)
        )
      }
    }
  }

  listen(port: number | string, callback?: () => void): void {
    this.app.listen(port,'0.0.0.0', (err) => {
      console.log(this.app.printRoutes())
      console.log('Fastify')
      if (err) {
        console.log('err', err)
        process.exit(1)
      }
      if(callback) {
        callback()
      }
    })
  }
}


// fastify.route({
//   method: 'GET',
//   url: '/',
//   schema: {
//     // request needs to have a querystring with a `name` parameter
//     querystring: {
//       name: { type: 'string' }
//     },
//     // the response needs to be an object with an `hello` property of type 'string'
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           hello: { type: 'string' }
//         }
//       }
//     }
//   },
//   // this function is executed for every request before the handler is executed
//   preHandler: (request, reply, done) => {
//     // E.g. check authentication
//     done()
//   },
//   handler: (request, reply) => {
//     reply.send({ hello: 'world' })
//   }
// })

// fastify.listen(3000, (err) => {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// })