'use strict'
const Portfolio = require('./model')

const list = async () => {
  const portfolio = await Portfolio.getOne()
  return portfolio
}

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
  list,
  create,
  getByToken,
}
