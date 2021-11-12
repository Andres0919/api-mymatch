'use strict'
import { Request, Response as Reply } from 'express'
import { RouteOptions } from '../Interfaces/RouteConfig.js'
import Response from './response'

export const executeRoute = async (
  req: Request,
  reply: Reply,
  options: RouteOptions = {}
) => {
  const response = new Response(req, reply)
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

    if (schema) {
      if ('body' in schema) {
        const { error } = await schema.body?.items.validate(req.body)
        if (error) {
          req.log.error(error)
          throw { message: 'Error en el cuerpo de la petición', status: 400 }
        }
      }
    }

    if (middleware && typeof middleware === 'function') {
      await middleware(req)
    }

    if (handler && typeof handler === 'function') {
      result = await handler(req)
    }

    if (replySchema && Object.keys(replySchema).length !== 0) {
      if (Array.isArray(result)) {
        result = result.map((r) => {
          for (const key in r) {
            if (!Object.prototype.hasOwnProperty.call(replySchema, key)) {
              delete r[key]
            }
          }

          return r
        })
      } else {
        for (const key in result) {
          if (!Object.prototype.hasOwnProperty.call(replySchema, key)) {
            delete result[key]
          }
        }
      }
    }

    return response.success(result, message, status)
  } catch ({ message, status }) {
    return response.error(message, status)
  }
}
