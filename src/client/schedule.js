const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')
const qs = require('query-string')

module.exports = {
  /**
   * Get present and past schedule data
   *
   * @param {object} options date, start date, end date
   * @return {Promise} Schedule Data
   */
  get: function(options) {
    const url = `https://statsapi.web.nhl.com/api/v1/schedule${options ? "&" + qs.stringify(options) : ""}`
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        resolve(res.dates)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  /**
   * Get linescore of games
   *
   * @param {object} options date, start date, end date
   * @return {Promise} Schedule Data
   */
  linescores: function(options) {
    const url = `https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore${options ? "&" + qs.stringify(options) : ""}`
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        let linescores = res.dates[0].games.map((curr) => {
            return {
              "id": curr.gamePk,
              "linescore": curr.linescore
            }
        })
        resolve(linescores)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  /**
   * Get broadcasts of game
   *
   * @param {object} options date, start date, end date
   * @return {Promise} boxscore data
   */
  broadcasts: function(options) {
    const url = `https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.broadcasts${options ? "&" + qs.stringify(options) : ""}`
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        let linescores = res.dates[0].games.map((curr) => {
            return {
              "id": curr.gamePk,
              "broadcasts": curr.broadcasts
            }
        })
        resolve(linescores)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  /**
   * Get tickets of game
   *
   * @param {object} options date, start date, end date
   * @return {Promise} ticket data
   */
  tickets: function(options) {
    const url = `https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.ticket${options ? "&" + qs.stringify(options) : ""}`
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        let linescores = res.dates[0].games.map((curr) => {
            return {
              "id": curr.gamePk,
              "tickets": curr.tickets
            }
        })
        resolve(linescores)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  /**
   * Get schedule for team
   *
   * @param {id} teamID team id
   * @param {object} options date, start date, end date
   * @return {Promise} team data
   */
  ofTeam: function(id, options) {
    const url = `https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}${options ? "&" + qs.stringify(options) : ""}`
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        resolve(res.dates[0])
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
