const nhl = require('../src')
const fetch = require('../src/utils/fetch.js')
/**
fetch("https://statsapi.web.nhl.com/api/v1/teams?season=19691970").then((res) => {
  console.log(res)
})
**/
//var lightning = nhl.Teams.getAbbrev("Tampa Bay Lightning")
/**
nhl.Game.getGameIDs("20172018", nhl.Teams.getAbbrev("Tampa Bay Lightning")).then((games) => {
  console.log("Module is functioning properly");
})
**/
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
/**
var lightning = nhl.Teams.getID("Tampa Bay Lightning")

nhl.Teams.getRoster(lightning, "20032004").then((res) => {
  var centers = res.filter((curr) => {
    return curr.position.name === "Center";
  })
  console.log(centers[0].person.primaryPosition);
}).catch((err) => {
  console.log(err)
})**/
nhl.Players.getHeadshots(nhl.Players.getID("Nikita Kucherov")).then((res) => {
  //console.log(res)
}).catch((err) => {
  //console.log(err)
})

nhl.Schedule.get().then((res) => {
  //console.log(res)
}).catch((err)=> {
  //console.log(err)
})
