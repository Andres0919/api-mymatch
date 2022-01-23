'use strict'
import { HttpFramework } from './utils/core'
import { API_PORT } from './config'
import { getApiRoutes } from './api'
// import Api from './api'

class Server {
  app: HttpFramework

  constructor() {
    this.app = HttpFramework.app()
    this.bootstrap()
  }

  private async routes() {
    const routes = await getApiRoutes()
    this.app.initHttpRoutes(routes, {
      globalPrefix: 'api',
    })
    // const api = new Api(this.app)
    // api.initRoutes()
  }

  private bootstrap() {
    this.routes()
  }

  init() {
    this.app.listen(API_PORT, () => {
      console.log(`Api listening in port ${API_PORT}`)
    })
  }
}

export default Server
