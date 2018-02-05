const nhl = require('./src')
const fetch = require('./src/utils/fetch.js')
/**
fetch("https://statsapi.web.nhl.com/api/v1/teams?season=19691970").then((res) => {
  console.log(res)
})
**/

nhl.Game.getGameIDs("20172018", nhl.Teams.getAbbrev("Tampa Bay Lightning")).then((games) => {
  console.log(games)
})
/**
nhl.Game.getTodayGameIDs().then((res) => {
  console.log(res)
})
**/
/**
let teams = {}
for (var i = 1; i <= 101; i++) {
  nhl.Teams.get(i).then((res) => {
    teams[res.name] = {
      "id": res.id,
      "nickname": res.abbreviation
    }
    console.log(teams)
  }).catch((err) => {
    console.log()
  })
}
**/
