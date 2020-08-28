'use strict'
const chalk = require('chalk')
const { sequelize, DataTypes, Model } = require('../../../store')
const Repository = require('../../../repository')

class Profile extends Model {}

Profile.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: 'Profile', // We need to choose the model name
  }
)

let async = async function () {
  try {
    await Profile.sync({ alter: true })
    console.log(chalk.green('Profile was synchronized successfully.'))
  } catch (error) {
    console.log(chalk.red('[error]', error))
  }
}

async()

module.exports = Repository(Profile)
