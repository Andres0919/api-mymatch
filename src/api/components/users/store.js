'use strict'
const User = require('./model')

const getAll = () => {
  return User.findAll({
    attributes: {
      exclude: ['password'],
    },
  })
}

const create = (user) => {
  return User.create(user)
}

module.exports = {
  getAll,
  create,
}
