'use strict'
const chalk = require('chalk')
const { sequelize, DataTypes, Model } = require('../../store')
const Repository = require('../../repository')

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.UUID,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      // allowNull defaults to true
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
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
    console.log(chalk.green('User was synchronized successfully.'))
  } catch (error) {
    console.log(chalk.red('[error]', error))
  }
}

async()

module.exports = Repository(User)
