'use strict'
const Opinion = require('./model')

const all = (where = {}) => {
  return Opinion.findAll({
    where: {
      ...where,
    },
  })
}

const findById = (opinionId) => {
  return Opinion.findOne({
    where: {
      id: opinionId,
    },
  })
}

const create = (opinion) => {
  return Opinion.create(opinion)
}

module.exports = {
  ...Opinion,
  all,
  findById,
  create,
}
