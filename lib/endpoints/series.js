'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/series.md
 */
class Series extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super(`series`, opts)
  }

  /**
   * Gets the games in a series.
   * @return {this}
   */
  games () {
    this._method = 'games'

    return this
  }
}

module.exports = Series
