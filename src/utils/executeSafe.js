const makeSafe = function (context, fn) {
  return function () {
    try {
      return fn.apply(context, arguments)
    } catch (error) {
      throw error
    }
  }
}

const executeSafe = async function (context, fn) {
  try {
    const fnSafe = makeSafe(context, fn)
    const result = await fnSafe()
    return Promise.resolve(result)
  } catch (error) {
    const message = error.message
    const status = error.output ? error.output.statusCode : error.status
    return Promise.reject({ status, message })
  }
}

module.exports = executeSafe
