const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {
  /**
   *
   * Get conferences or specific conference
   *
   * @param {string} id conference id
   * @return {Promise} conference data
   */
  get: function(id) {
    const url = `https://statsapi.web.nhl.com/api/v1/conferences/${id ? id : ""}`
    return new Promise(function(resolve, reject) {
      fetch(url).then((res) => {
        resolve(res.conferences)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
