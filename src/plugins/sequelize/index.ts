'use strict'
import { Sequelize, DataTypes, Model } from 'sequelize'
import { DB_URI } from '../../config'
import UserModel from './user'

const sequelize = new Sequelize(DB_URI)

export const UserSequilize = UserModel(sequelize, DataTypes, Model)

export default sequelize
