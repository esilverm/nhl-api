# Utils

For this project there are two util files that are being used.

## fetch.js

This file contains our function we will be using to fetch data from the API. Here is an example of its possible ways of usage.

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

The fetch method for this project is very flexible and can be used in many ways, including but not limited to those above. I will be including it as a default function of the project that can be called something like `NHL()` or something where you can make your own queries because that is a very neccessary thing I had missing in the project previously.


## helpers.js

Just a couple of validation functions for the project as a whole. Most pertain to date inputs and such. Here are all the functions defined in this file.

Name | Parameter(s) | Description
--- | --- | ---
`isValidDateFormat()`  | `date` - a date in the form YYYY-MM-DD | Determines whether a given date is valid
`isTimeframeValid()`  | `date1` - start date, `date2` - end date   |  Determines whether date1 comes before date2
`formatDate()`  | `date` - a date in the form YYYY-MM-DD  | Converts a date from the format YYYY-MM-DD to MM/DD/YYYY
`isValidSeasonFormat()`  | `season` - a string in the format YYYYYYYY (example: `20192020`) |  Determines whether a given season is valid.
