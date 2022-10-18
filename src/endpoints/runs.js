'use strict'

let Endpoint = require('../Endpoint')

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/runs.md
 */
class Runs extends Endpoint {
  constructor (opts) {
    opts = opts || {}

    super('runs', opts)

    if (opts.orderby) {
      switch (opts.orderby) {
        case 'game':
        case 'category':
        case 'level':
        case 'platform':
        case 'region':
        case 'emulated':
        case 'date':
        case 'submitted':
        case 'status':
        case 'verify':
          this.param(['orderby', opts.orderby])
      }
    }

    if (opts.user) this.param(['user', opts.user])
    if (opts.guest) this.param(['guest', opts.guest])
    if (opts.examiner) this.param(['examiner', opts.examiner])
    if (opts.game) this.param(['game', opts.game])
    if (opts.level) this.param(['level', opts.level])
    if (opts.category) this.param(['category', opts.category])
    if (opts.platform) this.param(['platform', opts.platform])
    if (opts.region) this.param(['region', opts.region])
    if (opts.emulated) this.param(['emulated', opts.emulated])
    if (opts.status) this.param(['status', opts.status])
  }

  /**
   * POSTs a run.
   * @todo
   * @return {this}
   */
  post () {
    return this
  }
}

module.exports = Runs
