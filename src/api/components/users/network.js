'use strict'
const express = require('express')
const response = require('../../../network/response')
const UserController = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
  response.success(req, res, 'Todo correcto', 200)
})

router.get('/', (req, res) => {
  response.success(req, res, 'Todo correcto', 200)
})

module.exports = router
