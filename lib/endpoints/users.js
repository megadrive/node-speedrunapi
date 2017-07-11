'use strict'

let Endpoint = require('../Endpoint')

class Users extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('users', opts)
  }

  personalBests () {
    this._method = 'personal-bests'
    return this
  }

  lookup (find) {
    this.param(['lookup', find.trim()])
    return this
  }
}

module.exports = Users
