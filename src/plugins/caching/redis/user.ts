import { get, remove, set } from '.'
import { IUserRepository, User } from '../../../api/users/repository'
import executeSafe from '../../../utils/executeSafe'

class UserCache implements IUserRepository {
  constructor(private userRepository: IUserRepository) {}
  list() {
    return executeSafe(this, async () => {
      let users = await get('users')
      if (!users) {
        users = await this.userRepository.list()
        set('users', JSON.stringify(users))
      } else {
        users = JSON.parse(String(users))
      }

      return users
    })
  }

  create(user: User) {
    remove('users')

    return this.userRepository.create({ ...user })
  }
}

export default UserCache
