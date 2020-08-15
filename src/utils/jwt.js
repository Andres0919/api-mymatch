const jwt = require('jsonwebtoken')
const { TOKEN_KEY } = require('../config')

const createToken = (payload) => {
  return jwt.sign(payload, TOKEN_KEY)
}

const decodeToken = (payload) => {
  return jwt.decode(payload, TOKEN_KEY)
}

module.exports = {
  createToken,
  decodeToken,
}
