const jwt = require('jsonwebtoken')
const { TOKEN_KEY } = require('../config')

const createToken = (payload) => {
  return jwt.sign(payload, TOKEN_KEY)
}

module.exports = {
  createToken,
}
