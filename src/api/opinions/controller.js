'use strict'
const Opinion = require('./store')

const OpinionController = {
  list() {
    return new Promise(async (resolve, reject) => {
      try {
        const opinios = await Opinion.all({ isActive: true })
        resolve(opinios)
      } catch (error) {
        reject(error)
      }
    })
  },
  create: ({ body }) => {
    const { fullName, comment, authorizeSocial } = body
    return new Promise(async (resolve, reject) => {
      try {
        await Opinion.create({ fullName, comment, authorizeSocial })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = OpinionController
