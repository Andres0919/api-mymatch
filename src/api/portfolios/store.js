'use strict'
const Portfolio = require('./model')

Portfolio.list = () => {
  return Portfolio.getOne()
}

Portfolio.create = (portfolio) => {
  return Portfolio.create(portfolio)
}

Portfolio.getByToken = (token) => {
  return Portfolio.findOne({
    where: {
      token,
    },
  })
}

module.exports = Portfolio
