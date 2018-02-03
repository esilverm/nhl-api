const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {

  /**
   * Method to list current nhl team data
   *
   * @param {string} id - Team ID (OPTIONAL)
   * @param {string} season - season (OPTIONAL)
   * @return {promise} all current NHL teams
   */
   get: function(id) {
     var url = `https://statsapi.web.nhl.com/api/v1/teams${id ? "/" + id : ""}`
     return new Promise((resolve, reject) => {
       fetch(url).then((res) => {
         resolve(id ? res.teams[0] : res.teams);
       }).catch((error) => {
         reject(error)
       })
     })
   },

   /**
    * Method to list all NHL team data from season
    *
    * @param {string} season - season
    * @return {promise} teams from given season
    */
   fromSeason: function(season) {
     const url = `https://statsapi.web.nhl.com/api/v1/teams?season=${season}`
     return new Promise((resolve, reject) => {
       if (!helpers.isValidSeasonFormat(season)) {
         reject("Invalid Season Format")
       }
       fetch(url).then((res) => {
         resolve(res.teams)
       }).catch((error) => {
         reject(error)
       })
     })
   },

   /**
    * Method to list all players for a team in a specific season
    *
    * @param {string} id - team id
    * @param {string} season - season (OPTIONAL)
    * @return {promise} team roster
    */
   getTeamRosterFromID: function(id, season) {
     const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster,roster.person${season ? "&season=" + season : ""}`
     return new Promise((resolve, reject) => {
       if (season && !helpers.isValidSeasonFormat(season)) {
         reject("Invalid Season Format")
       }
       fetch(url).then((res) => {
         resolve(res.teams[0].roster.roster)
       }).catch((error) => {
         reject(error)
       })
     })
   },

   /**
    * Method to list all stats by a team for a specific season
    *
    * @param {string} id - team id
    * @param {string} season - season (OPTIONAL)
    * @return {promise} team roster
    */
   getStatsFromID: function(id, season) {
     const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats${season ? "?season=" + season : ""}`
     return new Promise((resolve, reject) => {
       if (season && !helpers.isValidSeasonFormat(season)) {
         reject("Invalid Season Format")
       }
       fetch(url).then((res) => {
         resolve(res.stats[0].splits)
       }).catch((error) => {
         reject(error)
       })
     })
   },

   /**
    * Method to list all stat rankings by a team for a specific season
    *
    * @param {string} id - team id
    * @param {string} season - season (OPTIONAL)
    * @return {promise} team roster
    */
   getStatRankingsFromID: function(id, season) {
     const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats${season ? "?season=" + season : ""}`
     return new Promise((resolve, reject) => {
       if (season && !helpers.isValidSeasonFormat(season)) {
         reject("Invalid Season Format")
       }
       fetch(url).then((res) => {
         resolve(res.stats[1].splits)
       }).catch((error) => {
         reject(error)
       })
     })
   }
}
