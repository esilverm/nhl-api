const nhl = require('../src')
const _ = require('lodash')
// 7654

var plyobj = {}
let allPlayers = {}

function makeSortable(obj) {
  var sortable = [];
  for (var val in obj) {
      sortable.push([val, obj[val]]);
  }

  sortable.sort(function(a, b) {
      return a[1] - b[1];
  });
  return sortable
}
for (var i = 1917; i <= 2017; i++) {
  var season = "" + i + (i + 1)
  nhl.Teams.getRosters(season).then((res) => {
    for (var j = 0; j < res.length; j++) {
      let curr = res[j].roster;
      for (var k = 0; k < curr.length; k++) {
        if (!plyobj[curr[k].person.fullName.toLowerCase()]) {
          plyobj[curr[k].person.fullName.toLowerCase()] = curr[k].person.id
        }
      }
    }
    if (_.size(plyobj) >= 7604) {
      let ar = makeSortable(plyobj)
      for (var i = 0; i < ar.length; i++) {
        allPlayers[ar[i][0]] = ar[i][1]
      }
      console.log(allPlayers)
    }
  }).catch((err) => {
    console.log()
  })
}
