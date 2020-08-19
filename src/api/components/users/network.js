'use strict'
const express = require('express')
const response = require('../../../network/response')
const UserController = require('./controller')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await UserController.getAll(req)
    response.success(req, res, { users })
  } catch ({ message }) {
    response.error(req, res, { message })
  }
})

router.post('/', async (req, res) => {
  try {
    await UserController.create(req)
    response.success(req, res, { message: 'User created' }, 201)
  } catch ({ message }) {
    response.error(req, res, { message })
  }
})

module.exports = router
