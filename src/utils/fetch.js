const qs = require('query-string');
const axios = require('axios');

const BASE_URL = 'https://statsapi.web.nhl.com';

/**
 * Request data from api and return JSON response.
 *
 * @param {string} endpoint - desired endpoint to request data from site
 * @param {Object} params - parameters to search with
 * @return {Promise<Object>} data returned from our fetch
 */
async function fetchResource(endpoint, params = null) {
  const url = `${BASE_URL}${endpoint}`;
  const config = {
    url,
    params,
  };

  const res = await axios(config).then((res) => res.data)
  return res;
}

module.exports = fetchResource;
