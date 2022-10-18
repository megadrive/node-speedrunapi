'use strict'

let AuthEndpoint = require('../AuthEndpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/notifications.md
 *
 * NOTE: This class requires authentication.
 */
class Notifications extends AuthEndpoint {
  constructor () {
    super('notifications', {})
  }
}

module.exports = Notifications
