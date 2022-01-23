const executeSafe = async function <C>(context: C, fn: Function): Promise<any> {
  try {
    const fnContext = fn.apply(context, arguments)
    const result = await fnContext()
    return result
  } catch (error) {
    if (error instanceof Error) {
      const message = error.message
      const status = 500
      throw { status, message }
    }
  }
}

export default executeSafe
