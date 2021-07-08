'use strict'
const redis = require('redis')
const { CACHE_EXPIRE_AT } = require('../../config')

const client = redis.createClient()

client.on('error', function (error) {
  console.error(error)
})

const get = (keyword) => {
  return new Promise((resolve, reject) => {
    client.get(keyword, (err, data) => {
      if (err) {
        return reject(err)
      }

      return resolve(data)
    })
  })
}

const set = (keyword, value, expiredAt = CACHE_EXPIRE_AT) => {
  return client.setex(keyword, expiredAt, value)
}

const remove = (keyword) => {
  return client.del(keyword)
}

module.exports = {
  get,
  set,
  remove,
}
