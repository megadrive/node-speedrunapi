'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/leaderboards.md
 */
class Leaderboards extends Endpoint {
  /**
   * @param {string} game
   * @param {string} category
   * @param {string} level Optional.
   * @param {object} opts
   */
  constructor (game, category, level, opts) {
    opts = opts || {}

    if (typeof game !== 'string' || typeof category !== 'string') {
      console.error('`game` and `category` are mandatory for a leaderboard call.')
    }

    let path = `leaderboards/${game}/category/${category}`
    if (level) path = `leaderboards/${game}/level/${level}/${category}`

    super(path, opts)
  }
}

module.exports = Leaderboards
