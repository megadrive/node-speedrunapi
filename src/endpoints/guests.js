'use strict'

let Endpoint = require('../Endpoint')
/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/guests.md
 */
class Guests extends Endpoint {
  constructor (opts) {
    opts = opts || {}
    if (typeof opts === 'string') opts = { name: opts }

    super(`guests/${opts.name}`, opts)
  }
}

module.exports = Guests
