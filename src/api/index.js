'use strict'
const express = require('express')
const swaggerUi = require('swagger-ui-express')

const { checkPortfolio } = require('../middlewares/portfolio')
const portfolio = require('./components/portfolios/network')
const auth = require('./components/auth/network')
const profile = require('./components/profile/network')

const swaggerDoc = require('./swagger.json')

const app = express()

app.use('/api/portfolio', portfolio)
app.use(checkPortfolio)
app.use('/api/auth', auth)
app.use('/api/auth', profile)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
