'use strict'
const User = require('./model')

const getAll = (portfolioId) => {
  return User.findAll({
    where: {
      PortfolioId: portfolioId,
    },
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
