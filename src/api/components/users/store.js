'use strict'
const User = require('./model')

const all = (portfolioId) => {
  return User.findAll({
    where: {
      PortfolioId: portfolioId,
    },
    attributes: {
      exclude: ['password'],
    },
  })
}

const findById = (userId) => {
  return User.findOne({
    where: {
      id: userId,
    },
    attributes: {
      exclude: ['password'],
    },
  })
}

const findUserByEmailAndPortfolio = (email, portfolioId) => {
  return User.findOne({
    where: {
      email,
      PortfolioId: portfolioId,
    },
  })
}

const create = (user) => {
  return User.create(user)
}

module.exports = {
  all,
  findById,
  findUserByEmailAndPortfolio,
  create,
}
