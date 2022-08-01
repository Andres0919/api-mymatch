'use strict'
import { IHttpFramework } from './Interfaces/FrameworkApi'
import { API_PORT } from './config'
import { getApiRoutes } from './api'

class Server {
  app: IHttpFramework

  constructor(httpFramework: IHttpFramework) {
    this.app = httpFramework
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

  private async bootstrap() {
    await this.routes()
    this.init()
  }

  init() {
    this.app.listen(API_PORT, () => {
      console.log(`Api listening in port ${API_PORT}`)
    })
  }
}

export default Server
