const Qs = require('query-string');
const axios = require('axios');

const STATS_BASE_URL = 'https://statsapi.web.nhl.com';
const RECORDS_BASE_URL = 'https://records.nhl.com/site/api';

/**
 * Request data from api and return JSON response.
 *
 * @param {string} endpoint - desired endpoint to request data from site
 * @param {Object} params - parameters to search with
 * @return {Promise} data returned from our fetch
 */
async function fetchStats(endpoint, params = null) {
  const url = `${STATS_BASE_URL}${endpoint}`;
  const config = {
    url,
    params,
    paramsSerializer(params) {
      return Qs.stringify(params, {arrayFormat: 'comma'})
    },
  };

  return await axios(config).then((res) => res.data);
}

async function fetchRecords(endpoint, params = null) {
  const url = `${RECORDS_BASE_URL}${endpoint}`;
  const config = {
    url,
    params,
    paramsSerializer(params) {
      const paramEntries = Object.entries(params);
      let query = '?cayenneExp=';
      let i = 0;
      for (const [key, value] of paramEntries) {
        query += `${key}=${value}${++i < paramEntries.length ? '%20and%20': ''}`
      }

      return query;
    },
  };

  return await axios(config).then((res) => res.data);
}


module.exports = { fetchStats, fetchRecords };
