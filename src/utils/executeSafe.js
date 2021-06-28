const makeSafe = function (context, fn) {
  return function () {
    try {
      return fn.apply(context, arguments)
    } catch (error) {
      throw error
    }
  }
}

const executeSafe = function (context, fn) {
  return new Promise(async (resolve, reject) => {
    try {
      const fnSafe = makeSafe(context, fn)
      const result = await fnSafe()
      resolve(result)
    } catch (error) {
      const message = error.message
      const status = error.output ? error.output.statusCode : error.status
      reject({ status, message })
    }
  })
}

module.exports = executeSafe
