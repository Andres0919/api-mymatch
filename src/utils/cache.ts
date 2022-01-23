'use strict'
import { UserSequilize } from '../plugins/databases/sequelize'
import UserCache from '../plugins/caching/redis/user'

export const UserRepository = new UserCache(new UserSequilize())
