'use strict'
import { UserSequilize } from '../plugins/sequelize'
import UserCache from '../plugins/redis/user'

export const UserRepository = new UserCache(new UserSequilize())
