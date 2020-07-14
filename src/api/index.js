'use strict'
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const { async } = require('../store')
async()
const user = require('./components/users/network')
const swaggerDoc = require('./swagger.json')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/api/user', user)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
