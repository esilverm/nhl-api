# statsapi-nhl &nbsp;&nbsp;[![Build Status](https://img.shields.io/travis/esilverm/statsapi-nhl.svg)](https://travis-ci.com/esilverm/statsapi-nhl)&nbsp;&nbsp;[![NPM version](https://img.shields.io/npm/v/statsapi-nhl.svg)](https://www.npmjs.com/package/statsapi-nhl)&nbsp;&nbsp;[![Downloads](https://img.shields.io/npm/dt/statsapi-nhl.svg)](https://www.npmjs.com/package/statsapi-nhl)

[statsapi-nhl](https://github.com/esilverm/statsapi-nhl) provides a simple, organized way to access the NHL api.

## Installing

This library is distributed on `npm`. In order to add it as a dependency, run the following command:
```
$ npm install statsapi-nhl
```

## Usage
**Example** Retrieves the roster for the 2003-2004 season of the Tampa Bay Lightning and outputs player data for all of the centers:
```javascript
const nhl = require('statsapi-nhl')
var lightning = nhl.Teams.getID("Tampa Bay Lightning")

nhl.Teams.getRoster(lightning, "20032004").then((res) => {
  var centers = res.filter((curr) => {
    return curr.position.name === "Center";
  })
  console.log(centers);
}).catch((err) => {
  console.log(err)
})
```
**Example output**
```
[ { person:
     { id: 8458192,
       fullName: 'Tim Taylor',
       link: '/api/v1/people/8458192',
       firstName: 'Tim',
       lastName: 'Taylor',
       primaryNumber: '27',
       birthDate: '1969-02-06',
       birthCity: 'Stratford',
       birthStateProvince: 'ON',
       birthCountry: 'CAN',
       nationality: 'CAN',
       height: '6\' 1"',
       weight: 190,
       active: false,
       rookie: false,
       shootsCatches: 'L',
       rosterStatus: 'N',
       primaryPosition: { code: 'C', name: 'Center', type: 'Forward', abbreviation: 'C' } },
    jerseyNumber: '27',
    position: { code: 'C', name: 'Center', type: 'Forward', abbreviation: 'C' } },
  { person:
     { id: 8466399,
       fullName: 'Eric Perrin',
       link: '/api/v1/people/8466399',
       firstName: 'Eric',
       lastName: 'Perrin',
       primaryNumber: '11',
       birthDate: '1975-11-01',
       birthCity: 'Laval',
       ...
```

## Documentation

### Team


### People

### Games

### Schedule

### Standings

### Draft

## Contributing

Please read [CONTRIBUTING.md](https://github.com/esilverm/statsapi-nhl/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* [**Evan Silverman**](https://github.com/esilverm)

See also the list of [contributors](https://github.com/esilverm/statsapi-nhl/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details
