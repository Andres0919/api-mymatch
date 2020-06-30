const express = require('express')
const { Client } = require('pg')
const swaggerUi = require('swagger-ui-express')

const app = express()
const swaggerDoc = require('./api/swagger.json')

const init = async () => {
  // const client = new Client({
  //   connectionString:
  //     process.env.DATABASE_URL,
  //   ssl: {
  //     rejectUnauthorized: false,
  //   },
  // })

  // client.connect()

  // client.query(
  //   'SELECT table_schema,table_name FROM information_schema.tables;',
  //   (err, res) => {
  //     if (err) throw err
  //     for (let row of res.rows) {
  //       console.log(JSON.stringify(row))
  //     }
  //     client.end()
  //   }
  // )

  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  app.listen(process.env.PORT || 5000)
}

module.exports = {
  init,
}
