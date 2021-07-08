'use strict'
const chalk = require('chalk')
const Repository = require('../../repository')

const UserModel = ({ sequelize, DataTypes, Model }) => {
  class User extends Model {}

  User.init(
    {
      // Model attributes are defined here
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      uid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
      author: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        // allowNull defaults to true
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        // allowNull defaults to true
      },
    },
    {
      sequelize, // We need to pass the connection instance
      modelName: 'User', // We need to choose the model name
    }
  )

  let async = async function () {
    try {
      await User.sync({ alter: true })
      console.log(chalk.green('User was synchronized successfully2.'))
    } catch (error) {
      console.log(chalk.red('[error]', error))
    }
  }

  async()
  return Repository(User)
}

// module.exports = () => Repository(User)
module.exports = UserModel
