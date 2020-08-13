'use strict'
const express = require('express')
const response = require('../../../network/response')
const UserController = require('./controller')

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await UserController.getAllUsers()
  console.log('users :>> ', users)
  response.success(req, res, { data: users }, 200)
})

router.post('/', (req, res) => {
  UserController.createUser(req)
  response.success(req, res, 'Todo correcto', 200)
})

module.exports = router
