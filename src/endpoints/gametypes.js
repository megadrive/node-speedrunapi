'use strict'

let Endpoint = require('../Endpoint')
/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/gametypes.md
 */
class GameTypes extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('gametypes', opts)
  }
}

module.exports = GameTypes
