const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {
  /**
   *
   * Get division or division data
   *
   * @param {string} id division id
   * @return {Promise} division data
   */
  get: function(id) {
    const url = `https://statsapi.web.nhl.com/api/v1/divisions/${id ? id : ""}`
    return new Promise(function(resolve, reject) {
      fetch(url).then((res) => {
        resolve(id ? res.divisions[0] : res.divisions)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
