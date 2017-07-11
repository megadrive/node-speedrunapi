'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/games.md
 */
class Games extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('games', opts)
  }

  categories (opts) {
    this.method = 'categories'

    opts = opts || {}
    this.handleCommonOpts(opts)
    if (opts.miscellaneous) this.param(['miscellaneous', true])

    return this
  }

  levels (opts) {
    this.method = 'levels'

    opts = opts || {}
    this.handleCommonOpts(opts)

    return this
  }

  derivedGames (opts) {
    this.method = 'derived-games'

    opts = opts || {}
    this.handleCommonOpts(opts)

    return this
  }

  records (opts) {
    this.method = 'records'

    opts = opts || {}
    if (opts.top) this.param(['top', Number(opts.top)])
    if (opts['skip-empty']) this.param(['skip-empty', true])
    this.handleCommonOpts(opts)

    return this
  }

  variables (opts) {
    this.method = 'variables'

    opts = opts || {}
    this.handleCommonOpts(opts)

    return this
  }
}

module.exports = Games
