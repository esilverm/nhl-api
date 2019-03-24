const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {

  /**
   * Retrieve full game info
   *
   * @param {string} gameID - game ID
   * @return {Promise} Object containing all Game Data
   */
  get: function(id) {
    const url = `https://statsapi.web.nhl.com/api/v1/game/${id}/feed/live`
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },


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

  /**
   * Retrieve game media
   *
   * @param {string} gameID - game ID
   * @return {Promise} Object containing all game media
   */
   getContent: function(id) {
     const url = `https://statsapi.web.nhl.com/api/v1/game/${id}/content`
     return new Promise((resolve, reject) => {
       fetch(url).then((res) => {
         resolve(res.editorial.preview.items)
       }).catch((err) => {
         reject(err)
       })
     })
   },

   /**
    * Retrieve live game plays
    *
    * @param {string} gameID - game ID
    * @return {Promise} Object containing all live plays
    */
   getPlays: function(id) {
     return new Promise((resolve, reject) => {
       this.get(id).then((res) => {
         resolve(res.liveData.plays.allPlays)
       }).catch((err) => {
         reject(err)
       })
     })
   },

   /**
    * Retrieve game boxscore
    *
    * @param {string} gameID - game ID
    * @return {Promise} Entire game boxscore
    */
    getBoxscore: function(id) {
      const url = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`
      return new Promise((resolve, reject) => {
        fetch(url).then((res) => {
          resolve(res.teams)
        }).catch((err) => {
          reject(err)
        })
      })
    },

    /**
    * Retrieve game linescore
    *
    * @param {string} gameID - game ID
    * @return {Promise} Entire game linescore
    */
    getLinescore: function(id) {
      const url = `https://statsapi.web.nhl.com/api/v1/game/${id}/linescore`
      return new Promise((resolve, reject) => {
        fetch(url).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    }
}
