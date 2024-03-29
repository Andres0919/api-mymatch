'use strict'
const express = require('express')
const response = require('../../network/response')
const PostController = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
  response.success(req, res, 'Todo correcto', 200)
})

router.post('/', (req, res) => {
  PostController.create(req)
  response.success(req, res, 'Todo correcto', 200)
})

module.exports = {}
