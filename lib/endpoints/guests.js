'use strict'

let Endpoint = require('../Endpoint')

class Guests extends Endpoint {
  constructor (opts) {
    opts = opts || {}
    if (typeof opts === 'string') opts = { name: opts }

    super(`guests/${opts.name}`, opts)
  }
}

module.exports = Guests
