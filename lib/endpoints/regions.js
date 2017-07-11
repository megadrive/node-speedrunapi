'use strict'

let Endpoint = require('../Endpoint')

class Regions extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super(`regions`, opts)
  }
}

module.exports = Regions
