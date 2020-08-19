'use strict'
const User = require('./store')
const { hash } = require('../../../utils/bcrypt')

const UserController = {
  getAll: ({ portfolio }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const users = await User.all(portfolio.id)
        resolve(users)
      } catch (error) {
        reject(error)
      }
    })
  },
  create: ({ body, portfolio }) => {
    return new Promise(async (resolve, reject) => {
      try {
        let { firstName, lastName, email, password } = body
        const PortfolioId = portfolio.id
        password = hash(password)

        await User.create({ firstName, lastName, email, password, PortfolioId })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = UserController
