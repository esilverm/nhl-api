const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')
const players = require('../../lib/players.json')
const qs = require('query-string')
const https = require('https')
module.exports = {
  /**
   * Method to list player data
   *
   * @param {string} id - Player ID
   * @return {promise} player data
   */
  get: function(id) {
    const url = `https://statsapi.web.nhl.com/api/v1/people/${id}`
    return new Promise((resolve, reject) => {
      fetch(url).then((player) => {
        resolve(player.people[0])
      }).catch((error) => {
        reject(error)
      })
    })
  },

  /**
   * Method to get player id from name
   *
   * @param {string} name - player name
   * @return {number} player id
   */
  getID: function(player) {
    player = player.toLowerCase()
    if (!players[player]) {
      return new Error('No id was found. Check that the provided team is spelled correctly')
    }
    return players[player]
  },

  /**
   * Method to get the stats of a specific type for a specific player
   *
   * @param {string} id - player id
   * @param {object} options - an object consisting of optional type and optional season. single season is default. https://statsapi.web.nhl.com/api/v1/statTypes has list of all types
   * @return {Promise} player stats
   */
  getStats: function(id, options) {
    if (!options) {
      return new Error('Must include some kind of stat type')
    } else if (!options.stats) {
      options.stats = "statsSingleSeason"
    }
    const url = `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?${qs.stringify(options)}`
    return new Promise((resolve, reject) => {
      fetch(url).then((player) => {
        resolve(player.stats)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  /**
   * Method to get the headshots of a specific player
   *
   * @param {string} id - player id
   * @return {Promise} player headshots
   */
  getHeadshots: function(id) {
    return new Promise((resolve, reject) => {
      let req = https.get(`https://nhl.bamcontent.com/images/headshots/current/60x60/${id}.jpg`, (res) => {
        if (res.statusCode >= 200 && res.statusCode <= 299) {
          resolve({
            "60x60": {
              "jpg": {
                "aspectRatio": "1:1",
                "width": 60,
                "height": 60,
                "src": `https://nhl.bamcontent.com/images/headshots/current/60x60/${id}.jpg`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/60x60/${id}@2x.jpg`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/60x60/${id}@3x.jpg`
              },
              "png": {
                "aspectRatio": "1:1",
                "width": 60,
                "height": 60,
                "src": `https://nhl.bamcontent.com/images/headshots/current/60x60/${id}.png`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/60x60/${id}@2x.png`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/60x60/${id}@3x.png`
              }
            },
            "168x168": {
              "jpg": {
                "aspectRatio": "1:1",
                "width": 168,
                "height": 168,
                "src": `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}.jpg`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}@2x.jpg`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}@3x.jpg`
              },
              "png": {
                "aspectRatio": "1:1",
                "width": 168,
                "height": 168,
                "src": `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}.png`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}@2x.png`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/168x168/${id}@3x.png`
              }
            }
          })
        } else {
          resolve({
            "60x60": {
              "jpg": {
                "aspectRatio": "1:1",
                "width": 60,
                "height": 60,
                "src": `https://nhl.bamcontent.com/images/headshots/current/60x60/skater.jpg`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/60x60/skater@2x.jpg`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/60x60/skater@3x.jpg`
              },
              "png": {
                "aspectRatio": "1:1",
                "width": 60,
                "height": 60,
                "src": `https://nhl.bamcontent.com/images/headshots/current/60x60/skater.png`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/60x60/skater@2x.png`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/60x60/skater@3x.png`
              }
            },
            "168x168": {
              "jpg": {
                "aspectRatio": "1:1",
                "width": 168,
                "height": 168,
                "src": `https://nhl.bamcontent.com/images/headshots/current/168x168/skater.jpg`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/168x168/skater@2x.jpg`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/168x168/skater@3x.jpg`
              },
              "png": {
                "aspectRatio": "1:1",
                "width": 168,
                "height": 168,
                "src": `https://nhl.bamcontent.com/images/headshots/current/168x168/skater.png`,
                "at2x": `https://nhl.bamcontent.com/images/headshots/current/168x168/skater@2x.png`,
                "at3x": `https://nhl.bamcontent.com/images/headshots/current/168x168/skater@3x.png`
              }
            }
          })
        }
      })
      req.on('error', (error) => {
        reject(error)
      })
    })
  }
}
