'use strict'
export const NODE_ENV = process.env.NODE_ENV || 'dev'
export const API_PORT = process.env.PORT || 5000
export const DB_URI = process.env.DATABASE_URL || ''
export const TOKEN_KEY = process.env.TOKEN_KEY || 'token_secret'
export const CACHE_EXPIRE_AT = process.env.CACHE_EXPIRE_AT || 10
