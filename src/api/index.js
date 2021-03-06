'use strict'
const express = require('express')
const swaggerUi = require('swagger-ui-express')

const users = require('./users/network')
const auth = require('./auth/network')
const profile = require('./profiles/network')
const opinion = require('./opinions/network')

// const { checkPortfolio } = require('../middlewares/portfolio')
const swaggerDoc = require('./swagger.json')

const app = express()

app.use('/api/users', users)
// app.use(checkPortfolio)

app.use('/api/auth', auth)
app.use('/api/profiles', profile)
app.use('/api/opinions', opinion)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
