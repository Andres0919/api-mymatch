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
  } catch ({ message, status }) {
    response.error(req, res, { message }, status)
  }
})

router.get('/current_auth', isAuthenticated, async (req, res) => {
  try {
    response.success(req, res, {
      user: { author: req.portfolio.author, name: req.portfolio.name },
    })
  } catch ({ message, status }) {
    response.error(req, res, { message }, status)
  }
})

module.exports = router
