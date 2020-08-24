'use strict'
const express = require('express')
const swaggerUi = require('swagger-ui-express')

const { checkPortfolio } = require('../middlewares/portfolio')
const auth = require('./components/auth/network')
const portfolio = require('./components/portfolios/network')

const swaggerDoc = require('./swagger.json')

const app = express()

app.use(checkPortfolio)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/api/auth', auth)
app.use('/api/portfolio', portfolio)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
