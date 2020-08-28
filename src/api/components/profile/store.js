'use strict'
const Profile = require('./model')

Profile.all = (portfolioId) => {
  return Profile.findAll({
    where: {
      PortfolioId: portfolioId,
    },
  })
}

Profile.findById = (postId) => {
  return Profile.findOne({
    where: {
      id: postId,
    },
  })
}

Profile.create = (post) => {
  return Profile.create(post)
}

module.exports = Profile
