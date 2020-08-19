'use strict'
const chalk = require('chalk')
const { sequelize, DataTypes, Model } = require('../../../store')
const Portfolio = require('../portfolios/model')

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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.STRING,
    },
    publishedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
  }
)

User.belongsTo(Portfolio, {
  foreignKey: {
    allowNull: false,
  },
})

let async = async function () {
  try {
    await User.sync({ alter: true })
    console.log(chalk.green('User was synchronized successfully.'))
  } catch (error) {
    console.log(chalk.red('[error]', error))
  }
}

async()

module.exports = User
