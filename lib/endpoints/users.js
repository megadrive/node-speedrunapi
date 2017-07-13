'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/users.md
 */
class Users extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('users', opts)
  }

  /**
   * Adds Personal bests to the request.
   * @return {this}
   */
  personalBests () {
    this._method = 'personal-bests'
    return this
  }

  /**
   * Lookup a user using a variety of things. See Speedrun docs.
   * @param {string} find Information to find the user.
   * @return {this}
   */
  lookup (find) {
    this.param(['lookup', find.trim()])
    return this
  }
}

module.exports = Users
