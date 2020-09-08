'use strict'
const chalk = require('chalk')
const { sequelize, DataTypes, Model } = require('../../store')
const Portfolio = require('../portfolios/model')
const Repository = require('../../repository')

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
    imgUrl: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
    },
    cellphone: {
      type: DataTypes.STRING,
    },
    cellphoneAlt: {
      type: DataTypes.STRING,
    },
    jobTitle: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.STRING,
    },
    aboutMe: {
      type: DataTypes.TEXT,
    },
    languages: {
      type: DataTypes.STRING,
    },
    lookingForJob: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: 'Profile', // We need to choose the model name
  }
)

Profile.belongsTo(Portfolio, {
  foreignKey: {
    allowNull: false,
  },
})

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
