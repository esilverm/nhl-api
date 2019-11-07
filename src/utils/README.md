# Utils

For this project there are two util files that are being used.

## fetch.js

This file contains our function we will be using to fetch data from the api. Here is an example of its use in the context of this project:

```javascript
// assuming that we are working in the same directory as the file.
const fetch = require('./fetch.js');

/**
 * Say we want to get data for the Tampa Bay Lightning.
 * We can do this several ways.
 * Here are two examples of how we can do this:
 */

// 1.
fetch('/api/v1/teams/14').then(res => {
  // handle data
});

// 2.
async function handleData() {
  const data = await fetch('/api/v1/teams/14');
  // handle data
}

/**
 * Suppose we want to get the roster for the 2019/2020 season
 * of the Tampa Bay Lightning.
 * To do this we can use the params parameter of the fetch Method
 * Here are two examples of this
 */

// 1.
fetch('/api/v1/teams/14/roster', {
  'season': '20192020',
}).then(res => {
  // handleData
});

// 2.
async function handleData() {
  const { roster } = await fetch('/api/v1/teams/14/roster', {
    'season': '20192020',
  });
  console.log(roster)
  // handle data
}
```

The fetch method for this project is very flexible and can be used in many ways, including but not limited to those above.
