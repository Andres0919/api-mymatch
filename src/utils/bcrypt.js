const bcrypt = require('bcryptjs')
const saltRounds = 5

const hash = (text) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(text, salt)
    return hash
  } catch (error) {
    throw error
  }
}

const compare = (text, token) => {
  return bcrypt.compareSync(text, token)
}

module.exports = {
  hash,
  compare,
}
