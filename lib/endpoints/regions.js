'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/regions.md
 */
class Regions extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super(`regions`, opts)
  }
}

module.exports = Regions
