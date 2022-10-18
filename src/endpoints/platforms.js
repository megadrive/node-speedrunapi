'use strict'

let Endpoint = require('../Endpoint')
/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/platforms.md
 */

class Platforms extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super(`platforms`, opts)
  }
}

module.exports = Platforms
