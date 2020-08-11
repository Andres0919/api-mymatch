'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()

const { API_PORT } = require('./config')
const api = require('./api')

const app = express()

const init = async () => {
  app.use(helmet())
  app.use(morgan(':method :url :status :date'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json({ limit: '13mb', type: 'application/json' }))
  app.use(api)

  app.listen(API_PORT, () => {
    console.log('Api listening in port', API_PORT)
  })
}

module.exports = {
  init,
}
