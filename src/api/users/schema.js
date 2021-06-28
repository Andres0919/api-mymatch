'use strict'
const Joi = require('joi')

const addUser = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  author: Joi.string().required(),
})

module.exports = {
  addUser,
}
