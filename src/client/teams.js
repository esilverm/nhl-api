const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')

module.exports = {

  /**
   * Method to list current nhl team data
   *
   * @return {promise} all current NHL teams
   */
   getTeams: function() {
     var url = 'https://statsapi.web.nhl.com/api/v1/teams'
     return new Promise((resolve, reject) => {
       fetch(url).then((res) => {
         resolve(res.teams);
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
   getTeamsFromSeason: function(season) {
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
    * Method to list all NHL team data from season
    *
    * @param {string} id - team id
    * @return {promise} team data
    */
   getTeamFromID: function(id) {
     const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}`
     return new Promise((resolve, reject) => {
       fetch(url).then((res) => {
         resolve(res.teams[0])
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
   getTeamStatsFromID: function(id, season) {
     const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats${season ? "?season=" + season : ""}`
     return new Promise((resolve, reject) => {
       if (season && !helpers.isValidSeasonFormat(season)) {
         reject("Invalid Season Format")
       }
       fetch(url).then((res) => {
         resolve(res.stats)
       }).catch((error) => {
         reject(error)
       })
     })
   },

   
}
