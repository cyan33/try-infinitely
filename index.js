function tryInfinitely(callback, interval = 1) {
  try {
    callback()
  } catch(error) {
    setTimeout(callback, interval)
  }
}

function createTryUntilTruthy(callWhenTruthy = true) {
  return function tryUntilTruthy(value, callback, interval = 1) {
    if (value) {
      if (callWhenTruthy) {
        callback()
      }
      return
    }

    setTimeout(tryUntilTruthy.bind(this, value, callback, interval), interval)
  }
}

exports.createTryUntilTruthy = createTryUntilTruthy
exports.tryUntilTruthy = createTryUntilTruthy()
module.exports.default = tryInfinitely
