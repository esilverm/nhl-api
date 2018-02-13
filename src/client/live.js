const fetch = require('../utils/fetch.js')
const helpers = require('../utils/helpers.js')
const game = require('./game.js')
const interval = 2000;

function Game(id) {
  this.id = id
}


module.exports = Game
