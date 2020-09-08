'use strict'
const { createToken } = require('../../utils/jwt')
const { compare } = require('../../utils/bcrypt')
const moment = require('../../utils/moment')

const AuthController = {
  login: ({ portfolio, body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { email, password } = body
        const isEmailValid = email === portfolio.email
        const isPasswordValid = compare(password, portfolio.password)

        if (!isPasswordValid || !isEmailValid) {
          reject({ message: 'Email or password is not valid', status: 401 })
        }

        const bodyToken = {
          portfolio: portfolio.id,
          expires_at: moment().add(1, 'days').unix(),
        }

        const access_token = createToken(bodyToken)
        const authInfo = {
          name: portfolio.name,
          email,
          access_token,
          expires_at: moment
            .unix(bodyToken.expires_at)
            .format('YYYY-MM-DD HH:mm:ss'),
        }
        resolve(authInfo)
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = AuthController
