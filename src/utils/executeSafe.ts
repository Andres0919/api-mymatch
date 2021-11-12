const makeSafe = function <C>(context: C, fn: Function) {
  return function () {
    try {
      return fn.apply(context, arguments)
    } catch (error) {
      throw error
    }
  }
}

const executeSafe = async function <C>(context: C, fn: Function) {
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

export default executeSafe
