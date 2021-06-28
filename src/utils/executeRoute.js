'use strict'
const Response = require('./response')

const executeRoute = async (req, reply, options = {}) => {
  try {
    let result
    const { schema, handler, middleware, message, status = 200 } = options

    if (schema) {
      if ('body' in schema) {
        const { error } = await schema.body.validate(req.body)
        if (error) {
          throw { message: 'Error en el cuerpo de la petición', status: 400 }
        }
      }
    }

    if (middleware && typeof middleware === 'function') {
      await middleware(req)
    }

    if (handler && typeof handler === 'function') {
      result = await handler(req)
    }

    return Response.success(req, reply, result, message, status)
  } catch ({ message, status }) {
    console.log({ message, status })
    return Response.error(req, reply, message, status)
  }
}

module.exports = {
  executeRoute,
}
