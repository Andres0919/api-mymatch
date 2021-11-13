'use strict'
import { IUserRepository, User } from './repository'
import executeSafe from '../../utils/executeSafe'
import { hash } from '../../utils/bcrypt'
// const { hash } = require('../../utils/bcrypt')
// const Store = require('./cache')

class UserService {
  constructor(private userRepository: IUserRepository) {}

  listUsers() {
    return executeSafe(this, async () => {
      const users = this.userRepository.list()
      return users
    })
  }
  createUser(user: User) {
    return executeSafe(this, async () => {
      let { password } = user
      password = await hash(password)

      return this.userRepository.create({ ...user, password })
    })
  }
}

export default UserService
