'use strict'
const Post = require('./store')

const PostController = {
  create: ({ body }) => {
    const { name, author } = body
    return new Promise(async (resolve, reject) => {
      try {
        await Post.create({ name, author, token })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = PostController
