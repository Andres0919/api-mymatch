'use strict'
const Post = require('./model')

const all = (portfolioId) => {
  return Post.findAll({
    where: {
      PortfolioId: portfolioId,
    },
  })
}

const findById = (postId) => {
  return Post.findOne({
    where: {
      id: postId,
    },
  })
}

const create = (post) => {
  return Post.create(post)
}

module.exports = {
  all,
  findById,
  create,
}
