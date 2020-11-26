'use strict'
const { hash } = require('../../utils/bcrypt')
const User = require('./store')

const UserController = {
  create: ({ body }) => {
    let { name, author, email, password } = body
    password = hash(password)
    const token = hash(`${name}${author}`)
    return new Promise(async (resolve, reject) => {
      try {
        await User.create({ name, author, token, email, password})
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = UserController
