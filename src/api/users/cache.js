'use strict'
const { User } = require('../../utils/repository')
const { get, set } = require('../../utils/cache')
const executeSafe = require('../../utils/executeSafe')

const listUsers = () => {
  return executeSafe(this, async () => {
    let users = await get('users')
    if (!users) {
      users = await User.list()
      set('users', JSON.stringify(users))
    } else {
      users = JSON.parse(users)
    }

    return users
  })
}

module.exports = {
  listUsers,
}
