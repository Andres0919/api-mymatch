'use strict'
import { Request, Response as Reply } from 'express'

export default class Response {
  req: Request
  reply: Reply

  constructor(req: Request, reply: Reply) {
    this.req = req
    this.reply = reply
  }

  success(data: object = {}, message: string = '', status: number = 200) {
    return this.reply.status(status).send({
      data,
      error: false,
      message,
      status,
    })
  }

  error(message: string = 'Internal Server Error', status: number = 500) {
    return this.reply.status(status).send({
      data: null,
      error: true,
      message,
      status,
    })
  }
}
