'use strict'

require('dotenv').config()

const Endpoint = require('./Endpoint')

/**
 * AuthEndpoint is an Endpoint that requires Authentication for its API requests.
 */
class AuthEndpoint extends Endpoint {
  /**
   * Gets the headers required for an authenticated request.
   * @return {object} Headers in an object, or an empyy object if APIKEY doesn't exist in .env
   */
  headers () {
    if (process.env.APIKEY && process.env.APIKEY.length) {
      return {
        'headers': {
          'Host': 'www.speedrun.com',
          'Accept': 'application/json',
          'X-API-Key': process.env.APIKEY
        }
      }
    }

    return {}
  }

  exec () {
    const opts = this.headers()
    return super.exec(opts)
  }
}

module.exports = AuthEndpoint
