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

const compare = (password, token) => {
  return bcrypt.compareSync(password, token)
}

module.exports = {
  hash,
  compare,
}
