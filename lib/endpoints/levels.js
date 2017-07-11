'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/levels.md
 */
class Levels extends Endpoint {
  constructor (id, opts) {
    opts = opts || {}
    if (!id) console.error(Error('`id` is required to retrieve a Level.'))

    super('levels', opts)
  }

  categories (opts) {
    this.method = 'categories'

    opts = opts || {}
    this.handleCommonOpts(opts)

    return this
  }

  records (opts) {
    this.method = 'records'

    opts = opts || {}
    this.handleCommonOpts(opts)
    if (opts.top) this.param(['top', Number(opts.top)])
    if (opts['skip-empty']) this.param(['skip-empty', true])

    return this
  }

  variables (opts) {
    this.method = 'variables'

    opts = opts || {}
    this.handleCommonOpts(opts)

    return this
  }
}

module.exports = Levels
