const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')
const qs = require('query-string')
//https://statsapi.web.nhl.com/api/v1/standingsTypes

module.exports = {

  /**
   * Get season standings
   *
   * @param {object} options date or season
   * @return {Promise} standings data
   */
  get: function(options) {
    const url = `https://statsapi.web.nhl.com/api/v1/standings${options && "?" + qs.stringify(options)}`
    console.log(url)
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        resolve(res.records);
      }).catch((error) => {
        reject(error)
      })
    })
  },


  /**
   * Get season standings by type
   *
   * @param {string} type https://statsapi.web.nhl.com/api/v1/standingsTypes
   * @param {object} options date or season
   * @return {Promise} standings data
   */
  byType: function(type, options) {
    const url = `https://statsapi.web.nhl.com/api/v1/standings/${type}${options && "?" + qs.stringify(options)}`
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        resolve(res.records);
      }).catch((error) => {
        reject(error)
      })
    })
  }

}
