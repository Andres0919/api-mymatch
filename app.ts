'use strict'
import dotenv from 'dotenv'

const dirname = __dirname.replace('/dist', '')
dotenv.config({ path: `${dirname}/.env.${process.env.NODE_ENV}` })

import Server from './src/server'

const server = new Server()
server.listen()

export default server.app
