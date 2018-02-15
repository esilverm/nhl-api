var NHL = require('./src/index.js');

NHL.Draft.getProspects().then((res) => {
  console.log(res.length)
}).catch((err) => {})
