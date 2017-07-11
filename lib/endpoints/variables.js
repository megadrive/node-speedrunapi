'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/variables.md
 */
class Variables extends Endpoint {
  constructor (id, opts) {
    opts = opts || {}
    if (!id) console.error(Error('`id` is required to retrieve a Level.'))

    super('variables', opts)
  }
}

module.exports = Variables
