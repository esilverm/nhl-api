const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {
  /**
   *
   * Get division or division data
   *
   * @param {string} id conference id
   * @return {Promise} conference data
   */
  get: function(id) {
    const url = `https://statsapi.web.nhl.com/api/v1/divisions/${id ? id : ""}`
    return new Promise(function(resolve, reject) {
      fetch(url).then((res) => {
        resolve(res.divisions)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
