'use strict'
import { Request } from 'express'
import { UserRepository } from '../../utils/cache'
// import Service from './service'

export const list = () => {
  // const service = new Service(UserRepository)
  // return 'service.listUsers()'
  return null
}

export const create = ({ body }: Request) => {
  const { name, email, password } = body
  // const service = new Service(UserRepository)
  return 'service.createUser({ name, email, password })'
}
