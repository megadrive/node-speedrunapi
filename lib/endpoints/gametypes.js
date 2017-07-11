'use strict'

let Endpoint = require('../Endpoint')

class GameTypes extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('gametypes', opts)
  }
}

module.exports = GameTypes
