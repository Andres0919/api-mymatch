interface RouteConfig {
  moduleName: string
  routes: Array<Route>
}

export interface Route {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  path: string
  auth?: boolean
  description?: string
  options?: RouteOptions
}

export interface RouteOptions {
  handler?: Function
  message?: string
  status?: number
  schema?: Schema
  replySchema?: any
  middleware?: Function
}

export interface Schema {
  params?: SchemaDetail
  body?: SchemaDetail
  query?: SchemaDetail
}

interface SchemaDetail {
  required: boolean
  items: any
}

export default RouteConfig
