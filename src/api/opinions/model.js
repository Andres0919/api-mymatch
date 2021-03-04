'use strict'
const chalk = require('chalk')
const { sequelize, DataTypes, Model } = require('../../store')
const Repository = require('../../repository')

class Opinion extends Model {}

Opinion.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    twitterUrl: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    linkedinUrl: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    authorizeSocial: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // allowNull defaults to true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // allowNull defaults to true
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: 'Opinion', // We need to choose the model name
  }
)

let async = async function () {
  try {
    await Opinion.sync({ alter: true })
    console.log(chalk.green('Opinion was synchronized successfully.'))
  } catch (error) {
    console.log(chalk.red('[error]', error))
  }
}

async()

module.exports = Repository(Opinion)
