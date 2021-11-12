'use strict'
import bcrypt from 'bcryptjs'
const saltRounds = 5

export const hash = async (text: string) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(text, salt)
    return Promise.resolve(hash)
  } catch (error) {
    throw error
  }
}

export const compare = (text: string, token: string) => {
  return bcrypt.compareSync(text, token)
}
