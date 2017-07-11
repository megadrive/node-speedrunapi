'use strict'

let Endpoint = require('../Endpoint')

class Series extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super(`series`, opts)
  }

  games () {
    this._method = 'games'

    return this
  }
}

module.exports = Series
