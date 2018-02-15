const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {
  /**
   *
   * Get draft data
   *
   * @param {string} year YYYY format year. otherwise current year
   * @return {Promise} draft data
   */
  get: function(year) {
    const url = `https://statsapi.web.nhl.com/api/v1/draft/${year ? year : ""}`
    return new Promise(function(resolve, reject) {
      fetch(url).then((res) => {
        resolve(res.drafts)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  /**
   *
   * Get all draft prospects
   *
   * @return {Promise} all draft prospects
   */
  getProspects: function() {
    const url = `https://statsapi.web.nhl.com/api/v1/draft/prospects`
    return new Promise(function(resolve, reject) {
      fetch(url).then((res) => {
        resolve(res.prospects)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  /**
   *
   * Get specific draft prospect by ID
   *
   * @param {string} id prospect id
   * @return {Promise} prospect data
   */
  getProspect: function(id) {
    const url = `https://statsapi.web.nhl.com/api/v1/draft/prospects/${id}`
    return new Promise(function(resolve, reject) {
      fetch(url).then((res) => {
        resolve(res.prospects[0])
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
