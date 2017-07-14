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
   * @param {string} id The ID of the element to get.
   * @return {this}
   */
  id (id) {
    this._params.clear()
    this._id = id
    return this
  }

  /**
   * Adds a SINGLE param to the request.
   * @param {array} param Single array-pair of key => value
   * @param {object} param Single object-pair of {key: value}
   * @param {*} param Parameter name
   * @param {*} value Parameter value
   * @return {this}
   * @todo change required to an object
   */
  param (param, value) {
    if (Array.isArray(param)) {
      this._params.set(param[0], param[1])
    } else if (typeof param === 'object') {
      let key = Object.keys(param)[0]
      this._params.set(key, param[key])
    } else {
      this._params.set(param, value)
    }

    return this
  }

  /**
   * Adds a set of parameters to the request.
   * @param {object} params An object key:value pairs to add to the parameters.
   * @return {this}
   */
  params (params) {
    for (let k in params) {
      this._params.set(k, params[k])
    }

    return this
  }

  /**
   * Sets the method.
   * @param {string} method The method name
   */
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
   * @return {this}
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
  exec (opts) {
    opts = opts || {}
    opts['json'] = true

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
        resolve(url)
        return
      }

      got(url, opts)
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
