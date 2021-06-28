'use strict'
const success = (req, reply, data = {}, message = null, status = 200) => {
  return reply.status(status).send({
    data,
    error: false,
    message,
    status,
  })
}

const error = (req, reply, message = 'Internal Server Error', status = 500) => {
  return reply.status(status).send({
    data: null,
    error: true,
    message,
    status,
  })
}

module.exports = {
  success,
  error,
}
