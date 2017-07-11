'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/engines.md
 */
class Engines extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('engines', opts)
  }
}

module.exports = Engines
