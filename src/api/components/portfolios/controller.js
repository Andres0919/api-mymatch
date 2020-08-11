'use strict'
const Portfolio = require('./store')

const portfolioController = {
  createPortfolio: ({ body }) => {
    const { name, author } = body
    Portfolio.create({ name, author })
    console.log('profolio created,', name, author)
  },
}

module.exports = portfolioController
