'use strict'
import dotenv from 'dotenv'
import { HttpFramework } from './src/utils/core'

const dirname = __dirname.replace('/dist', '')
dotenv.config({ path: `${dirname}/.env.${process.env.NODE_ENV}` })

import Server from './src/server'

const server = new Server(new HttpFramework())

export default server.app
