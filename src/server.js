'use strict'
require('dotenv').config()
const express = require('express')

const config = require('./config')
const api = require('./api')

const app = express()

const init = async () => {
  app.use(api)

  app.listen(config.api.port, () => {
    console.log('Api listening in port', config.api.port)
  })
}

module.exports = {
  init,
}
