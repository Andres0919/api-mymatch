'use strict'
const express = require('express')
const UserController = require('./controller')
const Schema = require('./schema')
const { executeRoute } = require('../../utils/executeRoute')

const router = express.Router()

router.get('/', (req, res) =>
  executeRoute(req, res, {
    handler: UserController.list,
    message: 'todo asds',
  })
)

router.post('/', async (req, res) =>
  executeRoute(req, res, {
    schema: {
      body: Schema.addUser,
    },
    handler: UserController.create,
    message: '¡Usuario creado con éxito!',
    status: 201,
  })
)

module.exports = router
