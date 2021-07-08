'use strict'
const { Sequelize, DataTypes, Model } = require('sequelize')

const userModel = require('./user')
const { DB_URI } = require('../../config')

const sequelize = new Sequelize(DB_URI)

const User = userModel({ sequelize, DataTypes, Model })

module.exports = {
  User,
}
