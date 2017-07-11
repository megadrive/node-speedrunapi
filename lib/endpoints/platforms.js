'use strict'

let Endpoint = require('../Endpoint')

class Platforms extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super(`platforms`, opts)
  }
}

module.exports = Platforms
