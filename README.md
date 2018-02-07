# node-nhl-api &nbsp;&nbsp;[![Build Status](https://travis-ci.com/esilverm/node-nhl-api.svg?token=3cy6pRwSP7RhixpwXPpq&branch=master&style=flat-square)](https://travis-ci.com/esilverm/node-nhl-api)

[node-nhl-api](https://github.com/esilverm/node-nhl-api) provides a simple, organized way to access the NHL api.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

This library is distributed on `npm`. In order to add it as a dependency, run the following command:
```
$ npm install [name]
```

## Usage
**Example** Retrieves the roster for the 2003-2004 season of the Tampa Bay Lightning and outputs player data for all of the centers:
```javascript
const nhl = require('[module name]')
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


## api

### Teams

### People

### Games

### Schedule

### Standings

### Draft

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/esilverm/node-nhl-api/tags).

## Authors

* **Evan Silverman**

See also the list of [contributors](https://github.com/esilverm/node-nhl-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details
