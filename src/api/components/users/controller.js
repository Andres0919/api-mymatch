'use strict'
const User = require('./store')
const Portfolio = require('../portfolios/store')
const { hash } = require('../../../utils/bcrypt')

const UserController = {
  getAllUsers: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const users = await User.getAll()
        console.log('users :>> ', users)
        resolve(users)
      } catch (error) {
        reject(error)
      }
    })
  },
  createUser: ({ body, headers }) => {
    return new Promise(async (resolve, reject) => {
      try {
        let { firstName, lastName, email, password } = body
        const portfolio = await Portfolio.getByToken(headers.portfolio_token)
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
