'use strict'
const UserController = require('./controller')
const Schema = require('./schema')

const moduleName = 'users'
const routes = [
  {
    method: 'get',
    path: '/',
    options: {
      handler: UserController.list,
      message: 'todo asds',
    },
  },
  {
    method: 'post',
    path: '/',
    options: {
      handler: UserController.create,
      message: '¡Usuario creado con éxito!',
      status: 201,
    },
  },
]

module.exports = {
  moduleName,
  routes,
}
