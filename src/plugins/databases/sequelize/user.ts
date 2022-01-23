'use strict'

import { DataTypes, Sequelize } from 'sequelize/types'
import {
  IUserRepository,
  User as UserModel,
} from '../../../api/users/repository'
import { NODE_ENV } from '../../../config'
const chalk = require('chalk')

const UserModel = (
  sequelize: Sequelize,
  dataTypes: typeof DataTypes,
  Model: any
) => {
  class User extends Model implements IUserRepository {
    async list() {
      const userList = await User.findAll()
      return userList.map((u: User) => u.toJSON())
    }

    async create(user: UserModel) {
      const newUser = await User.create(user)
      return newUser.toJSON()
    }
  }

  User.init(
    {
      // Model attributes are defined here
      id: {
        allowNull: false,
        primaryKey: true,
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      uid: {
        allowNull: false,
        primaryKey: true,
        type: dataTypes.UUID,
        defaultValue: dataTypes.UUIDV4,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
      isVerified: {
        type: dataTypes.BOOLEAN,
        defaultValue: false,
        // allowNull defaults to true
      },
      isDelete: {
        type: dataTypes.BOOLEAN,
        defaultValue: false,
        // allowNull defaults to true
      },
    },
    {
      sequelize, // We need to pass the connection instance
      modelName: 'User', // We need to choose the model name
      raw: true,
    }
  )

  let async = async function () {
    try {
      await User.sync({ alter: true })
      console.log(chalk.green('User was synchronized successfully.'))
    } catch (error) {
      console.log(chalk.red('[error]', error))
    }
  }

  if (NODE_ENV === 'development') {
    async()
  }

  return User
}

export default UserModel
