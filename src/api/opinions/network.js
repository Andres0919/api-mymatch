'use strict'
const express = require('express')
const response = require('../../network/response')
const OpinionController = require('./controller')

const router = express.Router()

router.get('/', async (req, res) => {
  const opinions = await OpinionController.list()
  response.success(req, res, opinions, 200)
})

router.post('/', async (req, res) => {
  await OpinionController.create(req)
  response.success(req, res, 'Todo correcto', 200)
})

module.exports = {}
