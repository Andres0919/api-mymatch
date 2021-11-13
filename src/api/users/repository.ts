'use strict'

export interface User {
  id?: string
  uid?: string
  name?: string
  lastName?: string
  email?: string
  password: string
  isVerified?: boolean
  isDelete?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface IUserRepository {
  list(): Promise<[User]>
  create(user: User): Promise<User>
}
