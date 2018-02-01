const nhl = require('./src')
const fetch = require('./src/utils/fetch.js')
/*
fetch("https://statsapi.web.nhl.com/api/v1/teams?season=19691970").then((res) => {
  console.log(res)
})
*/
nhl.Teams.getTeamStatsFromID("14", "20032004").then((res) => {
  console.log(res)
}).catch((error) => {
  console.log(error)
})
