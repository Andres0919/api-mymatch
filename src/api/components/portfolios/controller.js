'use strict'
const Portfolio = require('./store')
const { hash } = require('../../../utils/bcrypt')

const PortfolioController = {
  create: ({ body }) => {
    const { name, author } = body
    return new Promise(async (resolve, reject) => {
      try {
        const token = hash(name)

        await Portfolio.create({ name, author, token })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = PortfolioController
