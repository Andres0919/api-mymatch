'use strict'
exports.success = (req, res, body = { message: '' }, status = 200) => {
  res.status(status).send({
    error: null,
    status,
    body,
  })
}

exports.error = (req, res, message = 'Internal server error', status = 500) => {
  res.status(status).send({
    error: true,
    status,
    body: message,
  })
}
