'use strict'

require('dotenv').config()

class SpeedrunApi {
  categories (idOrOpts) {
    const Categories = require('./endpoints/categories')
    return new Categories(idOrOpts)
  }

  developers (idOrOpts) {
    const Developers = require('./endpoints/developers')
    return new Developers(idOrOpts)
  }

  engines (idOrOpts) {
    const Engines = require('./endpoints/engines')
    return new Engines(idOrOpts)
  }

  games (idOrOpts) {
    const Games = require('./endpoints/games')
    return new Games(idOrOpts)
  }

  gametypes (idOrOpts) {
    const Gametypes = require('./endpoints/gametypes')
    return new Gametypes(idOrOpts)
  }

  guests (idOrOpts) {
    const Guests = require('./endpoints/guests')
    return new Guests(idOrOpts)
  }

  leaderboards (game, category, level, opts) {
    const Leaderboards = require('./endpoints/leaderboards')
    return new Leaderboards(game, category, level, opts)
  }

  levels (idOrOpts) {
    const Levels = require('./endpoints/levels')
    return new Levels(idOrOpts)
  }

  notifications (idOrOpts) {
    const Notifications = require('./endpoints/notifications')
    return new Notifications(idOrOpts)
  }

  platforms (idOrOpts) {
    const Platforms = require('./endpoints/platforms')
    return new Platforms(idOrOpts)
  }

  profile (idOrOpts) {
    const Profile = require('./endpoints/profile')
    return new Profile(idOrOpts)
  }

  regions (idOrOpts) {
    const Regions = require('./endpoints/regions')
    return new Regions(idOrOpts)
  }

  runs (idOrOpts) {
    const Runs = require('./endpoints/runs')
    return new Runs(idOrOpts)
  }

  series (idOrOpts) {
    const Series = require('./endpoints/series')
    return new Series(idOrOpts)
  }

  users (idOrOpts) {
    const Users = require('./endpoints/users')
    return new Users(idOrOpts)
  }

  variables (idOrOpts) {
    const Variables = require('./endpoints/variables')
    return new Variables(idOrOpts)
  }
}

module.exports = SpeedrunApi
