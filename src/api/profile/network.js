'use strict'
const express = require('express')
const response = require('../../network/response')
const ProfileController = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
  response.success(req, res, 'Todo correcto', 200)
})

router.post('/', async (req, res) => {
  try {
    const profile = await ProfileController.createOrUpdate(req)
    response.success(req, res, profile, 200)
  } catch ({ message, status }) {
    response.error(req, res, { message }, status)
  }
})

module.exports = router
