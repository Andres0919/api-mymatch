const { Sequelize, DataTypes, Model } = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.db_uri)

module.exports = {
  sequelize,
  DataTypes,
  Model,
}
