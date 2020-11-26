'use strict'
const express = require('express')
const swaggerUi = require('swagger-ui-express')

const users = require('./users/network')
const auth = require('./auth/network')
// const profile = require('./profile/network')

// const { checkPortfolio } = require('../middlewares/portfolio')
const swaggerDoc = require('./swagger.json')

const app = express()

app.use('/api/users', users)
// app.use(checkPortfolio)

app.use('/api/auth', auth)
// app.use('/api/profile', profile)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
