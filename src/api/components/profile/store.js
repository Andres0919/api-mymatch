'use strict'
const Profile = require('./model')

const all = (portfolioId) => {
  return Profile.findAll({
    where: {
      PortfolioId: portfolioId,
    },
  })
}

const findById = (postId) => {
  return Profile.findOne({
    where: {
      id: postId,
    },
  })
}

const create = (post) => {
  return Profile.create(post)
}

module.exports = {
  all,
  findById,
  create,
}
