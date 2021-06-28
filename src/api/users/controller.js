'use strict'
const Service = require('./service')

const UserController = {
  create: ({ body }) => {
    const { name, author, email, password } = body
    return Service.createUser({ name, author, email, password })
  },
  list: () => {
    return Service.listUsers()
  },
}

module.exports = UserController
