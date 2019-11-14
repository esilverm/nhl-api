# fetch.js

## What is this?

This is how I will be fetching the data from the NHL api. There are two api endpoints that the site uses. There is the statsapi.web.nhl site and then the records.nhl.com/site/api. The inclusion of the latter api makes this wrapper "not like the other wrappers". 

## Examples

Here are some examples of use for the stats fetch function.

```javascript
// assuming that we are working in the same directory as the file.
const fetch = require('./fetch.js');

/**
 * Say we want to get data for the Tampa Bay Lightning.
 * We can do this several ways.
 * Here are two examples of how we can do this:
 */

// 1.
fetch.fetchStats('/api/v1/teams/14').then(res => {
  // handle data
});

// 2.
async function handleData() {
  const data = await fetch.fetchStats('/api/v1/teams/14');
  // handle data
}

/**
 * Suppose we want to get the roster for the 2019/2020 season
 * of the Tampa Bay Lightning.
 * To do this we can use the params parameter of the fetch Method
 * Here are two examples of this
 */

// 1.
fetch.fetchStats('/api/v1/teams/14/roster', {
  'season': '20192020',
}).then(res => {
  // handleData
});

// 2.
async function handleData() {
  const { roster } = await fetch.fetchStats('/api/v1/teams/14/roster', {
    'season': '20192020',
  });
  console.log(roster)
  // handle data
}
```
