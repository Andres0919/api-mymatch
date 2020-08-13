'use strict'
const Portfolio = require('./store')
const { hash } = require('../../../utils/bcrypt')

const portfolioController = {
  createPortfolio: ({ body }) => {
    const { name, author } = body
    new Promise((resolve, reject) => {
      try {
        const token = hash(name)

        Portfolio.create({ name, author, token })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = portfolioController
