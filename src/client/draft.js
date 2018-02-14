const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {
  /**
   *
   * Get division or division data
   *
   * @param {string} year YYYY format year. otherwise current year
   * @return {Promise} conference data
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
  }
}
