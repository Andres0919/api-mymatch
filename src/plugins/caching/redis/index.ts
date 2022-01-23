'use strict'
import redis from 'redis'
import { CACHE_EXPIRE_AT } from '../../../config'

const client = redis.createClient()

client.on('error', function (error) {
  console.error(error)
})

export const get = (keyword: string) => {
  return new Promise((resolve, reject) => {
    client.get(keyword, (err, data) => {
      if (err) {
        return reject(err)
      }

      return resolve(data)
    })
  })
}

export const set = (
  keyword: string,
  value: any,
  expiredAt = CACHE_EXPIRE_AT
) => {
  return client.setex(keyword, Number(expiredAt), value)
}

export const remove = (keyword: string) => {
  return client.del(keyword)
}
