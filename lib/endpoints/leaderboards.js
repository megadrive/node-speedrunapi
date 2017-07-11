'use strict'

let Endpoint = require('../Endpoint')

/**
 * Leaderboards are a bit special. `level` can be undefined, the others are
 * mandatory.
 */
class Leaderboards extends Endpoint {
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
