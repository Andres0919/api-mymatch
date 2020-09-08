'use strict'
const Profile = require('./store')

const ProfileController = {
  create: ({ body }) => {
    const { name, author } = body
    return new Promise(async (resolve, reject) => {
      try {
        await Profile.create({ name, author })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = ProfileController
