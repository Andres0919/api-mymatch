'use strict'
const { createToken } = require('../../../utils/jwt')
const { compare } = require('../../../utils/bcrypt')
const moment = require('../../../utils/moment')

const User = require('../users/store')

const UserController = {
  login: ({ portfolio, body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { email, password } = body
        const user = await User.findUserByEmailAndPortfolio(email, portfolio.id)
        const isPasswordValid = await compare(password, user.password)

        if (!isPasswordValid) {
          reject({ message: 'Email or password is not valid' })
        }

        const bodyToken = {
          user: user.id,
          expires_at: moment().add(1, 'days').unix(),
        }

        const access_token = await createToken(bodyToken)
        const token = {
          name: user.name,
          email,
          access_token,
          expires_at: moment
            .unix(bodyToken.expires_at)
            .format('YYYY-MM-DD HH:mm:ss'),
        }
        resolve(token)
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = UserController
