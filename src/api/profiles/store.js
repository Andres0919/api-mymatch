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

Profile.findByPortfolioId = function (portfolioId) {
  return this.findOne({
    where: {
      PortfolioId: portfolioId,
    },
  })
}

Profile.updateOne = function (profileId, profile) {
  return this.update(profile, {
    where: {
      id: profileId,
    },
    returning: true,
  })
}

Profile.createOne = function (profile) {
  return this.create(profile)
}

module.exports = Profile
