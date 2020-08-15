'use strict'
const { createToken } = require('../../../utils/jwt')
const { hash } = require('../../../utils/bcrypt')

const UserController = {
  login: ({ portfolio }) => {
    return new Promise(async (resolve, reject) => {
      try {
        // const users = await User.getAll(portfolio.id)
        const bodyToken = {
          user: 'user',
        }
        const token = await createToken(bodyToken)
        resolve(token)
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = UserController
