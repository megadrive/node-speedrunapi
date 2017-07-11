'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/categories.md
 */
class Developers extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('developers', opts)
  }
}

module.exports = Developers
