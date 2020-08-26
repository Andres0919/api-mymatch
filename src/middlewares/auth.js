const response = require('../network/response')
const { decodeToken } = require('../utils/jwt')
const moment = require('../utils/moment')

const isAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return response.error(
      req,
      res,
      {
        message:
          'I need to know who are you, you send me the authorization header',
      },
      401
    )
  }

  const [Bearer, token] = authorization.split(' ')
  if (Bearer !== 'Bearer' || !token) {
    return response.error(
      req,
      res,
      {
        message: `I'm sorry, the token no valid`,
      },
      401
    )
  }

  let bodyToken
  bodyToken = decodeToken(token)

  if (!bodyToken || !bodyToken.portfolio || !bodyToken.expires_at) {
    return response.error(
      req,
      res,
      {
        message: `I'm sorry, the authorization token no valid`,
      },
      401
    )
  }

  if (bodyToken.expires_at <= moment().unix()) {
    return response.error(
      req,
      res,
      {
        message: `I'm sorry, the token has expired`,
      },
      401
    )
  }

  next()
}

module.exports = {
  isAuthenticated,
}
