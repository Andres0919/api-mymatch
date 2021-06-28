'use strict'
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const chalk = require('chalk')
const cors = require('cors')
require('dotenv').config()

const { API_PORT } = require('./config')
const api = require('./api')

const app = express()

const init = () => {
  app.use(cors())
  app.use(helmet())
  app.use(morgan(':method :url :status :date'))
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json({ limit: '13mb', type: 'application/json' }))
  api(app)

  app.listen(API_PORT, () => {
    console.log(`Api listening in port ${API_PORT}`)
  })
}

module.exports = {
  init,
  app,
}
