'use strict'
const express = require('express')
const swaggerUi = require('swagger-ui-express')

const portfolio = require('./components/portfolios/network')
const auth = require('./components/auth/network')
const profile = require('./components/profile/network')

const { checkPortfolio } = require('../middlewares/portfolio')
const swaggerDoc = require('./swagger.json')

const app = express()

app.use('/api/portfolio', portfolio)
app.use(checkPortfolio)

app.use('/api/auth', auth)
app.use('/api/profile', profile)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
