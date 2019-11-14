const { fetchStats, fetchRecords } = require('../utils/fetch.js');

class NHLApi {

  /**
   * This API is documented at this site:
   * https://gitlab.com/dword4/nhlapi/blob/master/stats-api.md
   *
  */

  // GENERAL

  /**
   * A general query function for the API
   * This will remain as a fetchStats method only since the Records part of the
   * API is a lot less documented
   *
   * @param {string} endpoint - desired endpoint to request data from site
   * @param {Object} params - parameters to search with
   * @return {Promise} data returned from our fetch
   */
  async get(endpoint, params = null) {
    return await fetchStats(endpoint, params);
  }

  // SEASONS

  /**
   * Makes a query to the conferences endpoint of the api
   * By default it lists every season
   * Use 'current' to get the current season.
   *
   * @param {string} season - the season name in YYYYYYYY format or 'current'
   * @param {Object} params - parameters to search with
   * @return {Promise} conference data
   */
  async getSeason(season = '', params = null) {
    const endpoint = `/api/v1/seasons/${season}`;
    return await fetchStats(endpoint, params);
  }


  // SCHEDULE

  /**
   * Makes a query to the schedule endpoint of the api
   *
   * @param {Object} params - parameters to search with
   * @return {Promise} conference data
   */
  async getSchedule(params = null) {
    const endpoint = `/api/v1/schedule`;
    return await fetchStats(endpoint, params);
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
    return await fetchStats(endpoint, params);
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
    return await fetchStats(endpoint, params);
  }

  // TEAMS

  /**
   * Makes a query to the teams endpoint of the api
   * if id is not specified all active teams are listed
   *
   * @param {string} id - the specific team id
   * @param {Object} params - parameters to search with
   * @return {Promise} teams data
   */
  async getTeams(id = '', params = null) {
    const endpoint = `/api/v1/teams/${id}`;
    return await fetchStats(endpoint, params);
  }

  /**
   * Retrieves a team's current (or past) roster
   *
   * @param {string} id - the specific team id REQUIRED
   * @param {Object} params - parameters to search with
   * @return {Promise} team roster data
   */
  async getTeamRoster(id = '', params = null) {
    const endpoint = `/api/v1/teams/${id}/roster`;
    return await fetchStats(endpoint, params);
  }

  /**
   * Retrieves a team's current (or past) stats
   *
   * @param {string} id - the specific team id REQUIRED
   * @param {Object} params - parameters to search with
   * @return {Promise} team stats data
   */
  async getTeamStats(id = '', params = null) {
    const endpoint = `/api/v1/teams/${id}/stats`;
    return await fetchStats(endpoint, params);
  }


  // PEOPLE

  /**
   * Makes a query to the people endpoint of the api.
   *
   * @param {string} id - the specific NHL player id
   * @param {Object} params - parameters to search with
   * @return {Promise} NHL player data
   */
   async getPlayer(id = '', params = null) {
     const endpoint = `/api/v1/people/${id}`;
     return await fetchStats(endpoint, params);
   }

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
      return await fetchStats(endpoint, params);
    }

  // STANDINGS

  /**
   * Makes a query to the standings endpoint of the api
   *
   * Standing types can be found at api/v1/standingsTypes
   *
   * @param {string} type - desired type of standings.
   * @param {Object} params - parameters to search with
   * @return {Promise} standings data
   */
  async getStandings(type = '', params = null) {
    const endpoint = `/api/v1/standings`;
    return await fetchStats(endpoint, params);
  }



  // DRAFT

  /**
   * Makes a query to the draft endpoint of the api
   *
   * @param {string} year - YYYY format specifying draft year
   * @param {Object} params - parameters to search with
   * @return {Promise} draft data
   */
  async getDraft(year = '', params = null) {
    const endpoint = `/api/v1/draft/${year}`;
    return await fetchStats(endpoint, params);
  }

  /**
   * Makes a query to the draft endpoint of the records api
   *
   * @param {Object} params - parameters to search with
   * @return {Promise} draft data
   */
  async getDraftHistory(params = null) {
    const endpoint = `/draft`;
    return await fetchRecords(endpoint, params);
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
    return await fetchStats(endpoint, params);
  }


  // TOURNAMENTS

  /**
   * Makes a query to the tournaments endpoint of the api
   * by default it checks the current season playoffs
   *
   * Use: ?expand=round.series,schedule.game.seriesSummary to get
   * a more detailed response
   *
   * @param {Object} params - parameters to search with
   * @return {Promise} draft data
   */
  async getTournament(params = null) {
    const endpoint = `/api/v1/tournaments/playoffs`;
    return await fetchStats(endpoint, params);
  }


  // AWARDS

  /**
   * Makes a query to the awards endpoint of the api. Defalt lists all awards
   *
   * @param {string} id - the specific award id
   * @param {Object} params - parameters to search with
   * @return {Promise} award data
   */
  async getAwards(id = '', params = null) {
    const endpoint = `/api/v1/awards/${id}`;
    return await fetchStats(endpoint, params);
  }

  // RECORDS

  /**
   * Makes a query to the record detail endpoint of the record api.
   * Also includes links to
   *
   * @param {Object} params - parameters to search with
   * @return {Promise} every all-time NHL record
  */
  async getRecordDetails(params = null) {
    const endpoint = `/record-detail`;
    return await fetchStats(endpoint, params);
  }

  /**
   * Makes a query to the all time francise records endpoint of the record api.
   * This shows record vs every other team
   *
   * @param {Object} id - specific franchise id REQUIRED
   * @param {Object} params - parameters to search with
   * @return {Promise} list of all time records for a franchise
  */
  async getRecordsVsFranchise(id = '', params = null) {
    const options = { id, ...params };
    const endpoint = `/all-time-record-vs-franchise`;
    return await fetchStats(endpoint, options);
  }

  /**
   * Makes a query to the playoff francise records endpoint of the record api.
   * This shows record vs every other team
   *
   * @param {Object} id - specific franchise id REQUIRED   *
   * @param {Object} params - parameters to search with
   * @return {Promise} every all-time NHL record
  */
  async getPlayoffRecordsVsFranchise(id = '', params = null) {
    const options = { id, ...params };
    const endpoint = `/playoff-franchise-vs-franchise`;
    return await fetchStats(endpoint, options);


  // VENUES

  /**
   * Makes a query to the venues endpoint of the api. Defalt lists all venues
   *
   * @param {string} id - the specific venue id
   * @param {Object} params - parameters to search with
   * @return {Promise} venue data
   */
  async getVenues(id = '', params = null) {
    const endpoint = `/api/v1/venues/${id}`;
    return await fetchStats(endpoint, params);
  }

  // TYPE LISTS

  /**
   * Gets all stat types for player data
   *
   * @return {Promise} a list of stat types
   */
   async getStatTypes() {
     const endpoint = `/api/v1/statTypes`;
     return await fetchStats(endpoint);
   }

   /**
    * Gets all stat types for standings data
    *
    * @return {Promise} a list of stat types
    */
    async getStandingsTypes() {
      const endpoint = `/api/v1/standingsTypes`;
      return await fetchStats(endpoint);
    }

    /**
     * Gets all game types for game data
     *
     * @return {Promise} a list of game types
     */
     async getGameTypes() {
       const endpoint = `/api/v1/gameTypes`;
       return await fetchStats(endpoint);
     }

     /**
      * Gets all play types for game data
      *
      * @return {Promise} a list of play types
      */
      async getPlayTypes() {
        const endpoint = `/api/v1/playTypes`;
        return await fetchStats(endpoint);
      }

      /**
       * Gets all event types
       * This is just to give coverage of the entire api
       *  in the documentation i've used it is mentioned as an artifact
       *  from reconfiguration
       *
       * @return {Promise} a list of event types
       */
       async getEventTypes() {
         const endpoint = `/api/v1/eventTypes`;
         return await fetchStats(endpoint);
       }
}

export default NHLApi;
