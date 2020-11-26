const makeSafe = function(controller, fn) {
  return function() {
    try {
      return fn.apply(controller, arguments);
    } catch (error) {
      throw error;
    }
  };
};

const executeSafe = function(controller, fn) {
  return new Promise(async (resolve, reject) => {
    try {
      const fnSafe = makeSafe(controller, fn);
      const result = await fnSafe();
      resolve(result);
    } catch (error) {
      const message = error.message;
      const status = error.output ? error.output.statusCode : error.status;
      reject({ status, message });
    }
  });
};

module.exports = executeSafe;
