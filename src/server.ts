'use strict'
import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import pino from 'express-pino-logger'

import { API_PORT } from './config'
import Api from './api'

class Server {
  app: Application

  constructor() {
    this.app = express()

    this.plugins()

    this.routes()
  }

  private plugins() {
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(morgan(':method :url :status :date'))
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json({ limit: '13mb', type: 'application/json' }))
    this.app.use(
      pino({
        prettyPrint: true,
        autoLogging: false,
      })
    )
  }

  private routes() {
    const api = new Api(this.app)
    api.initRoutes()
  }

  listen() {
    this.app.listen(API_PORT, () => {
      console.log(`Api listening in port ${API_PORT}`)
    })
  }
}

export default Server
