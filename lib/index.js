'use strict'

require('dotenv').config()

class SpeedrunApi {
  categories (idOrOpts) {
    return require('./lib/endpoints/categories')(idOrOpts)
  }

  developers (idOrOpts) {
    return require('./lib/endpoints/developers')(idOrOpts)
  }

  engines (idOrOpts) {
    return require('./lib/endpoints/engines')(idOrOpts)
  }

  games (idOrOpts) {
    return require('./lib/endpoints/games')(idOrOpts)
  }

  gametypes (idOrOpts) {
    return require('./lib/endpoints/gametypes')(idOrOpts)
  }

  guests (idOrOpts) {
    return require('./lib/endpoints/guests')(idOrOpts)
  }

  leaderboards (idOrOpts) {
    return require('./lib/endpoints/leaderboards')(idOrOpts)
  }

  levels (idOrOpts) {
    return require('./lib/endpoints/levels')(idOrOpts)
  }

  // notifications (idOrOpts) {
  //   return require('./lib/endpoints/notifications')(idOrOpts)
  // }

  platforms (idOrOpts) {
    return require('./lib/endpoints/platforms')(idOrOpts)
  }

  // profile (idOrOpts) {
  //   return require('./lib/endpoints/profile')(idOrOpts)
  // }

  regions (idOrOpts) {
    return require('./lib/endpoints/regions')(idOrOpts)
  }

  runs (idOrOpts) {
    return require('./lib/endpoints/runs')(idOrOpts)
  }

  series (idOrOpts) {
    return require('./lib/endpoints/series')(idOrOpts)
  }

  users (idOrOpts) {
    return require('./lib/endpoints/users')(idOrOpts)
  }

  variables (idOrOpts) {
    return require('./lib/endpoints/variables')(idOrOpts)
  }
}

module.exports = SpeedrunApi
