'use strict'
const Post = require('./model')

Post.all = (portfolioId) => {
  return Post.findAll({
    where: {
      PortfolioId: portfolioId,
    },
  })
}

Post.findById = (postId) => {
  return Post.findOne({
    where: {
      id: postId,
    },
  })
}

Post.create = (post) => {
  return Post.create(post)
}

module.exports = Post
