'use strict'
const User = require('./store')

const portfolioController = {
  createPortfolio: ({ body }) => {
    const { name, author } = body
    new Promise(async (resolve, reject) => {
      try {
        await User.create({ name, author })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = portfolioController
