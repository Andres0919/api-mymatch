'use strict'
const { User } = require('../../utils/repository')

const listUsers = () => {
  return User.list()
}

module.exports = {
  listUsers,
}
