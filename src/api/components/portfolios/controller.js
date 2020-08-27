'use strict'
const Portfolio = require('./store')
const { hash } = require('../../../utils/bcrypt')

const PortfolioController = {
  getAll: () => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('Portfolio :>> ', Portfolio)
        let sa = await Portfolio.getOne()
        resolve(sa)
      } catch (error) {
        reject(error)
      }
    })
  },
  create: ({ body }) => {
    let { name, author, email, password } = body
    return new Promise(async (resolve, reject) => {
      try {
        const token = hash(name)
        password = hash(password)

        await Portfolio.create({ name, author, email, password, token })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = PortfolioController
