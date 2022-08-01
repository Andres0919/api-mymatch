'use strict'
import IRouteConfig from './RouteConfig'

export interface IHttpFramework {
  initHttpRoutes(routes: IRouteConfig[], { globalPrefix: string } : { globalPrefix: string }) : void
  listen(port: number | string, callback?: () => void): void
}
