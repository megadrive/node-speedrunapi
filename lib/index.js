'use strict'

require('dotenv').config()

class SpeedrunApi {
  categories (idOrOpts) {
    return require('./endpoints/categories')(idOrOpts)
  }

  developers (idOrOpts) {
    return require('./endpoints/developers')(idOrOpts)
  }

  engines (idOrOpts) {
    return require('./endpoints/engines')(idOrOpts)
  }

  games (idOrOpts) {
    return require('./endpoints/games')(idOrOpts)
  }

  gametypes (idOrOpts) {
    return require('./endpoints/gametypes')(idOrOpts)
  }

  guests (idOrOpts) {
    return require('./endpoints/guests')(idOrOpts)
  }

  leaderboards (idOrOpts) {
    return require('./endpoints/leaderboards')(idOrOpts)
  }

  levels (idOrOpts) {
    return require('./endpoints/levels')(idOrOpts)
  }

  // notifications (idOrOpts) {
  //   return require('./endpoints/notifications')(idOrOpts)
  // }

  platforms (idOrOpts) {
    return require('./endpoints/platforms')(idOrOpts)
  }

  // profile (idOrOpts) {
  //   return require('./endpoints/profile')(idOrOpts)
  // }

  regions (idOrOpts) {
    return require('./endpoints/regions')(idOrOpts)
  }

  runs (idOrOpts) {
    return require('./endpoints/runs')(idOrOpts)
  }

  series (idOrOpts) {
    return require('./endpoints/series')(idOrOpts)
  }

  users (idOrOpts) {
    return require('./endpoints/users')(idOrOpts)
  }

  variables (idOrOpts) {
    return require('./endpoints/variables')(idOrOpts)
  }
}

module.exports = SpeedrunApi
