const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')
const url = "https://statsapi.web.nhl.com/api/v1/teams"
module.exports = {

  /**
   *
   * @param {string} team - team name
   * @return {promise} TeamID
   *
   * @TODO: Find a way to list all teams and not be restricted to just one
   */
   getTeams: function() {
     return new Promise((resolve, reject) => {
       fetch(url).then((res) => {
         resolve(res.teams);
       }).catch((error) => {
         reject(error)
       })
     })
   },
}
