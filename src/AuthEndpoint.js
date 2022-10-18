'use strict'

require('dotenv').config()

const Endpoint = require('./Endpoint')

/**
 * AuthEndpoint is an Endpoint that requires Authentication for its API requests.
 */
class AuthEndpoint extends Endpoint {
  /**
   * Gets the headers required for an authenticated request.
   * @return {object} Headers in an object, or an empty object if APIKEY doesn't exist in .env
   */
  headers (overrideOpts) {
    let apiKey = process.env.APIKEY
    if (overrideOpts && overrideOpts.APIKEY) apiKey = overrideOpts.APIKEY

    if (process.env.APIKEY && process.env.APIKEY.length) {
      return {
        'headers': {
          'Host': 'www.speedrun.com',
          'Accept': 'application/json',
          'X-API-Key': apiKey
        }
      }
    }

    return {}
  }

  exec (overrideOpts) {
    const opts = this.headers(overrideOpts)
    return super.exec(opts)
  }
}

module.exports = AuthEndpoint
