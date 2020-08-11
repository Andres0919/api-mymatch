'use strict'
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  API_PORT: process.env.PORT || 5000,
  DB_URI: process.env.DATABASE_URL || '',
}
