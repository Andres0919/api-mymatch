const { decodeToken } = require('../utils/jwt')
const moment = require('../utils/moment')
const User = require('../api/components/users/store')

const checkUserAuth = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.send({
      message:
        'I need to know who are you, you send me the authorization header',
    })
  }

  const [Bearer, token] = authorization.split(' ')
  if (Bearer !== 'Bearer' || !token) {
    res.send({
      message: 'Token no valid',
    })
  }

  let bodyToken
  try {
    bodyToken = await decodeToken(token)
  } catch (error) {
    res.send({
      message: error.message,
    })
  }

  if (!bodyToken.user || !bodyToken.expires_at) {
    res.send({
      message: 'Token no valid',
    })
  }

  if (bodyToken.expires_at <= moment().unix()) {
    return res.status(401).send({ message: 'the token has expired' })
  }

  const user = await User.findById(bodyToken.user)

  req.current_user = user

  next()
}

module.exports = {
  checkUserAuth,
}
