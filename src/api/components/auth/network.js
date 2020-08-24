'use strict'
const express = require('express')
const response = require('../../../network/response')
const { isAuthenticated } = require('../../../middlewares/auth')
const AuthController = require('./controller')

const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    let token = await AuthController.login(req)
    response.success(req, res, token, 201)
  } catch ({ message }) {
    response.error(req, res, { message })
  }
})

router.get('/current_user', isAuthenticated, async (req, res) => {
  try {
    response.success(req, res, { user: req.current_user }, 201)
  } catch ({ message }) {
    response.error(req, res, { message })
  }
})

module.exports = router
