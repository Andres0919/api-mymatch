'use strict'
const Portfolio = require('./model')

const create = (portfolio) => {
  return Portfolio.create(portfolio)
}

const getByToken = (token) => {
  return Portfolio.findOne({
    where: {
      token,
    },
  })
}

module.exports = {
  create,
  getByToken,
}
