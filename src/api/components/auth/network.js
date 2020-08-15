'use strict'
const express = require('express')
const response = require('../../../network/response')
const { checkUserAuth } = require('../../../middlewares/auth')
const AuthController = require('./controller')

const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    let token = await AuthController.login(req)
    response.success(req, res, { token }, 201)
  } catch ({ message }) {
    response.error(req, res, { message })
  }
})

router.get('/current_user', checkUserAuth, (req, res) => {
  try {
    AuthController.getCurrentUser(req)
    response.success(req, res, { message: 'User created' }, 201)
  } catch ({ message }) {
    response.error(req, res, { message })
  }
})

module.exports = router
