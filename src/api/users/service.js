'use strict'
const executeSafe = require('../../utils/executeSafe')
const { hash } = require('../../utils/bcrypt')
const Store = require('./cache')

const UserService = {
  createUser({ name, author, email, password }) {
    return executeSafe(this, async () => {
      password = hash(password)
      const token = hash(`${name}${author}`)

      await Store.create({ name, author, token, email, password })
    })
  },
  listUsers() {
    return executeSafe(this, async () => {
      const users = await Store.listUsers()
      return users
    })
  },
}

module.exports = UserService
