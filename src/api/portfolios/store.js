'use strict'
const Portfolio = require('./model')

Portfolio.list = () => {
  return Portfolio.getOne()
}

Portfolio.create = (portfolio) => {
  return Portfolio.create(portfolio)
}

Portfolio.getByToken = function (token) {
  return this.findOne({
    where: {
      token,
      isDeleted: false,
    },
  })
}

module.exports = Portfolio
