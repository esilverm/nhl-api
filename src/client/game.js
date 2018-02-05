const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {

  /**
   * Retrieve all game id's for a season
   *
   * @param {string} season - desired season. FORMAT: YYYYYYYY -> 20162017
   * @param {string} team - team Abbreviation (OPTIONAL)
   * @return {Promise} response of request
   */
  getGameIDs: function(season, team) {
    let url = `http://live.nhl.com/GameData/SeasonSchedule-${season}.json`
    return new Promise((resolve, reject) => {
      if(helpers.isValidSeasonFormat(season)) {
        fetch(url).then((res) => {
          if (!team) {
            resolve(res)
          } else {
            let games = res.filter((index, item) => {
              return index.a === team || index.h === team
            })
            resolve(games)
          }
        }).catch((err) => {
          reject(err)
        })
      } else {
        reject(new Error('Invalid season format'))
      }
    })
  },

  /**
   * Retrieve short game data info
   *
   * @return {Promise} Object containing game id, time, and teams
   */
  getTodayGames: function() {
    const url = `https://statsapi.web.nhl.com/api/v1/schedule`;
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        let games = res.dates[0].games.map((curr) => {
          return {
            "id": curr.gamePk,
            "est": curr.gameDate,
            "a": curr.teams.away.team.name,
            "h": curr.teams.home.team.name
          }
        })
        resolve(games)
      }).catch((err) => {
        reject(err)
      })
    })
  },


}
