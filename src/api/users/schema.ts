'use strict'
import Joi from 'joi'

export const addUser = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

export const replyUser = {
  name: {
    type: 'string',
  },
  email: {
    type: 'string',
  },
}
