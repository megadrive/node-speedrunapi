'use strict'

const apiVer = require('../package.json').api_ver
const got = require('got')
const speedrunApi = `http://www.speedrun.com/api/${apiVer}/`

class Endpoint {
  constructor (endpoint, opts) {
    opts = opts || {}

    if (typeof endpoint === 'object' || endpoint === undefined) {
      throw new Error('`endpoint` must be a string in Endpoint::super')
    }

    this._id = opts.id || undefined
    this._endpoint = endpoint
    this._method = undefined
    this._params = new Map()
    this.handleCommonOpts(opts)

    if (opts.id) this.id = opts.id
    if (typeof opts === 'string') {
      this.id(opts)
    } else {
      for (let k in opts) {
        this.param([k, opts[k]])
      }
    }
  }

  /**
   * Using this resets the internal param array.
   */
  id (id) {
    this._params.clear()
    this._id = id
    return this
  }

  /**
   * Adds a param to the request
   * @param {array} param Single array-pair of key => name
   * @return {this}
   * @todo change required to an object
   */
  param (param) {
    this._params.set(param[0], param[1])
    return this
  }

  method (method) {
    this._method = method
    return this
  }

  /**
   * Embeds other resources. See: https://github.com/speedruncom/api/blob/master/version1/embedding.md
   * @param {array} embed An array of embed names
   * @return {this}
   */
  embed (embed) {
    this.param(['embed', embed.join(',')])
    return this
  }

  /**
   * Get info in bulk, less is returned for large datasets.
   */
  bulk () {
    this.param(['_bulk', true])
    return this
  }

  /**
   * Executes a chain. Must be the last thing called.
   * NOTE: Any invalid parameters will be included in the API call but will get
   * ignored server-side.
   * @return {Promise<JSON|Error>}
   */
  exec () {
    const self = this
    return new Promise(function (resolve, reject) {
      let url = speedrunApi + self._endpoint
      if (self._id) url += '/' + self._id
      if (self._method) url += '/' + self._method
      let params = []

      self._params.forEach(function (v, k) {
        params.push(k + '=' + v)
      })
      if (params.length) url += '?'
      url += params.join('&')

      if (process.env.DEBUG) {
        console.info(process.env.DEBUG)
        resolve(url)
        return
      }

      got(url, { json: true })
        .then(function (res) {
          let obj = {
            items: res.body.data
          }
          if (!res.body.pagination) {
            obj.pagination = null
          } else {
            obj.pagination = res.body.pagination
          }
          resolve(obj)
        })
        .catch(function (err) {
          console.info(err)
          reject(Error(err))
        })
    })
  }

  /**
   * Handles common options that occur regularly in methods.
   * @param {object} opts object of options
   */
  handleCommonOpts (opts) {
    if (opts.max) this.param('max', opts.max)

    if (opts.orderby) {
      switch (opts.orderby) {
        case 'name':
        case 'mandatory':
        case 'user-defined':
        case 'pos':
        case 'miscellaneous':
          this.param('orderby', opts.orderby)
          break
      }
    }

    if (opts.direction) {
      switch (opts.direction) {
        case 'asc':
        case 'desc':
          this.param('direction', opts.direction)
          break
      }
    }

    if (opts.max) this.param('max', Number(opts.max))
    if (opts.offset) this.param('offset', Number(opts.offset))
  }
}

module.exports = Endpoint
