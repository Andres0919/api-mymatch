'use strict';
const success = (req, reply, data = {}, message = null, statusCode = 200) => {
  return reply
    .response({
      data,
      error: false,
      message,
      statusCode,
    })
    .code(statusCode);
};

const error = (
  req,
  reply,
  message = 'Internal Server Error',
  statusCode = 500
) => {
  return reply
    .response({
      data: null,
      error: true,
      message,
      statusCode,
    })
    .code(statusCode);
};

const Response = async (req, h, Controller, method, args = {}) => {
  try {
    const { params, message, status } = args;
    const controller = new Controller(req);
    const res = await controller[method](params);
    return success(req, h, res, message, status);
  } catch ({ message, status }) {
    return error(req, h, message, status);
  }
};

const ResponseLessAction = () => {}

module.exports = {
  Response,
  ResponseLessAction
};
