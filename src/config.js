'use strict'
module.exports = {
  node_env: process.env.NODE_ENV || 'dev',
  api: {
    port: process.env.API_PORT || 5000,
  },
  db_uri: process.env.DATABASE_URL || '',
}
