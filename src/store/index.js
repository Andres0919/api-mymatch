const { Sequelize, DataTypes, Model } = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.db_uri)

let async = async function () {
  try {
    await sequelize.sync({ force: true })
    console.log('All models were synchronized successfully.')
  } catch (error) {
    console.log('[error]', error)
  }
}

module.exports = {
  sequelize,
  DataTypes,
  Model,
  async,
}
