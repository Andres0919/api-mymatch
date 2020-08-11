'use strict'
const express = require('express')
const response = require('../../../network/response')
const portfolioController = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
  response.success(req, res, 'Todo correcto', 200)
})

router.post('/', (req, res) => {
  portfolioController.createPortfolio(req)
  return response.success(req, res, 'Todo correcto', 200)
})

module.exports = router
