'use strict'
const express = require('express')
const response = require('../../../network/response')
const PortfolioController = require('./controller')

const router = express.Router()

router.post('/', async (req, res) => {
  await PortfolioController.create(req)
  response.success(req, res, { message: 'Todo correcto' })
})

module.exports = router
