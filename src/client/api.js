const fetch = require('../utils/fetch.js');
const helpers = require('../utils/helpers.js');


class NHLApi {

  /**
   * This API is documented at this site:
   * https://gitlab.com/dword4/nhlapi/blob/master/stats-api.md
   *
  */

  // GENERAL

  /**
   * A general query function for the API
   *
   * @param {string} endpoint - desired endpoint to request data from site
   * @param {Object} params - parameters to search with
   * @return {Promise} data returned from our fetch
   */
  async get(endpoint, params = null) {
    return await fetch(endpoint, params);
  }


  // CONFERENCES

  /**
   * Makes a query to the conferences endpoint of the api
   *
   * @param {string} id - the specific conference id to be requested.
   * @param {Object} params - parameters to search with
   * @return {Promise} conference data
   */
  async getConference(id = '', params = null) {
    const endpoint = `/api/v1/conferences/${id}`;
    return await fetch(endpoint, params);
  }


  // DIVISIONS

  /**
   * Makes a query to the division endpoint of the api
   *
   * @param {string} id - the specific division id to be requested.
   * @param {Object} params - parameters to search with
   * @return {Promise} division data
   */
  async getDivision(id = '', params = null) {
    const endpoint = `/api/v1/divisions/${id}`;
    return await fetch(endpoint, params);
  }


  // DRAFT

  /**
   * Makes a query to the division endpoint of the api
   *
   * @param {string} year - YYYY format specifying draft year
   * @param {Object} params - parameters to search with
   * @return {Promise} draft data
   */
  async getDraft(year = '', params = null) {
    const endpoint = `/api/v1/draft/${year}`;
    return await fetch(endpoint, params);
  }


  // DRAFT PROSPECT

  /**
   * Makes a query to the draft prospect endpoint of the api.
   * when id is left blank, all eligible draft prospects are listed
   *
   * @param {string} id - the specific NHL entry draft prospect id
   * @param {Object} params - parameters to search with
   * @return {Promise} draft prospect data
   */
  async getDraftProspects(id = '', params = null) {
    const endpoint = `/api/v1/draft/prospect/${id}`;
    return await fetch(endpoint, params);
  }


  // PEOPLE

  /**
   * Makes a query to the people endpoint of the api.
   *
   * @param {string} id - the specific NHL player id. REQUIRED
   * @param {Object} params - parameters to search with
   * @return {Promise} NHL player data
   */
   async getPlayer(id = '', params = null) {
     const endpoint = `/api/v1/people/${id}`;
     return await fetch(endpoint, params);
   }


   /**
    * This is a listing of all of the stat types provided by the API:
    *    statsSingleSeason
    *    yearByYear
    *    homeAndAway
    *    winLoss
    *    byMonth
    *    byDayOfWeek
    *    vsDivision
    *    vsConference
    *    vsTeam
    *    gameLog
    *    regularSeasonStatRankings
    *    goalsByGameSituation
    *    onPaceRegularSeason
   */

  
   /**
    * Makes a query to the people stats endpoint of the api
    *
    * @param {string} id - the specific NHL player id. REQUIRED
    * @param {Object} params - parameters to search with. Must specify stat type
    * @return {Promise} NHL player stats
    */
    async getPlayerStats(
      id = '',
      params = { 'stats': 'statsSingleSeason' }
    ) {
      const endpoint = `/api/v1/people/${id}/stats`;
      return await fetch(endpoint, params);
    }
}
