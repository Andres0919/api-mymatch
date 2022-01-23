'use strict'
// import { Application, Request, Response } from 'express'
import IRouteConfig from '../Interfaces/RouteConfig'
import { getAllFilesBySimilarPath } from '../plugins/fs/fast-glob'

// import swaggerUi from 'swagger-ui-express'

// import { executeRoute } from '../utils/executeRoute'
// import swaggerDoc from './swagger.json'

const globalPrefix = '/api'

interface ApiDoc {
  [key: string]: any
  paths: {
    [key: string]: any
  }
}

export async function getApiRoutes(): Promise<IRouteConfig[]> {
  let networks: IRouteConfig[] = []
  try {
    const files = await getAllFilesBySimilarPath('dist/**/**/network.js')

    for (let fileName of files) {
      fileName = fileName.replace('dist/src/api', '.')

      const moduleContent = await import(fileName)
      const routeConfig: IRouteConfig = moduleContent.default

      if (!routeConfig.routes || !routeConfig.moduleName) {
        continue
      }
      networks = [...networks, routeConfig]
    }

    return networks
  } catch (error) {
    console.log(`error.message`, error)
    throw new Error('error.message')
  }
}

// class Api {
//   app: Application
//   apiDoc: ApiDoc = {
//     ...swaggerDoc,
//     paths: {},
//   }

//   constructor(app: Application) {
//     this.app = app
//   }

//   async initRoutes() {
//     const files = await fg(['dist/**/**/network.js'], { dot: true })
//     for (let fileName of files) {
//       fileName = fileName.replace('dist/src/api', '.')

//       if (fileName !== './users/network.js') {
//         continue
//       }
//       const moduleContent = await import(fileName)
//       const routeConfig: IRouteConfig = moduleContent.default

//       if (!routeConfig.routes || !routeConfig.moduleName) {
//         continue
//       }

//       for (const route of routeConfig.routes) {
//         const routeMethod = route.method || 'get'
//         const routeFullPath = `${globalPrefix}/${routeConfig.moduleName}${route.path}`
//         this.app[routeMethod](routeFullPath, (req: Request, res: Response) =>
//           executeRoute(req, res, route.options)
//         )

//         this.makePathDocumentation(route, routeFullPath, routeConfig.moduleName)
//       }
//     }

//     this.app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(this.apiDoc))
//   }

//   makePathDocumentation(
//     route: Route,
//     routeFullPath: string,
//     moduleName: string
//   ) {
//     this.apiDoc.paths = {
//       [routeFullPath]: {
//         ...this.apiDoc.paths[routeFullPath],
//         [route.method]: {
//           tags: [moduleName],
//           produces: ['application/json'],
//           description: route.description || '',
//           parameters: route.options?.schema && [
//             route.options?.schema?.body && {
//               in: 'body',
//               name: 'body',
//               required: route.options?.schema?.body?.required || false,
//               schema: {
//                 type: 'object',
//                 properties:
//                   route.options?.schema?.body &&
//                   (() => {
//                     const properties: any = {}
//                     for (const entry of route.options?.schema?.body?.items._ids._byKey.entries()) {
//                       properties[entry[0] || 'any'] = {
//                         type: entry[1].schema.type,
//                       }
//                     }
//                     return properties
//                   })(),
//               },
//             },
//           ],
//         },
//       },
//     }
//   }
// }

// export default Api
