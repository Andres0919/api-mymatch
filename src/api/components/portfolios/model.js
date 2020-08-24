'use strict'
const chalk = require('chalk')
const { sequelize, DataTypes, Model } = require('../../../store')

class Portfolio extends Model {}

Portfolio.init(
  {
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
    author: {
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
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Portfolio', // We need to choose the model name
  }
)

let async = async function () {
  try {
    await Portfolio.sync({ alter: true })
    console.log(chalk.green('Portfolio was synchronized successfully.'))
  } catch (error) {
    console.log(chalk.red('[error]', error))
  }
}

async()

module.exports = Portfolio
