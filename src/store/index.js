'use strict'
const { Sequelize, DataTypes, Model } = require('sequelize')
const { DB_URI } = require('../config')

const sequelize = new Sequelize(DB_URI)

module.exports = {
  sequelize,
  DataTypes,
  Model,
}
