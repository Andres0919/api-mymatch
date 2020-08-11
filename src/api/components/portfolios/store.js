'use strict'
const Portfolio = require('./model')

const create = (portfolio) => {
  return Portfolio.create(portfolio)
}

module.exports = {
  create,
}
