var expect = require('chai').expect;
var NHL = require('../src/index.js');

describe('Teams:', () => {
  describe('Return an array of all current NHL teams', () => {
    it('Should return an array of objects with team data', (done) => {
      NHL.Teams.get().then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Should return data for a single NHL team', () => {
    it('Should return an object with data of a single team', (done) => {
      NHL.Teams.get(14).then(res => {
        expect(res).to.be.an('object')
        expect(res).to.have.property('id')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Get a team ID from a team name', () => {
    it('Should return a team ID', () => {
      expect(NHL.Teams.getID('Tampa Bay Lightning')).to.be.a('number')
    })
  })

  describe('Get a team abbreviation from a team name', () => {
    it('Should return a team abbreviation', () => {
      expect(NHL.Teams.getAbbrev('Tampa Bay Lightning')).to.be.a('string')
    })
  })

  describe('Return an array of all NHL teams', () => {
    it('Should return an array of objects with team data', (done) => {
      NHL.Teams.fromSeason('20032004').then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Get all current team data with rosters', () => {
    it('Should return an array of objects with team data and rosters', (done) => {
      NHL.Teams.getRosters().then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Get team data with rosters from a certain season', () => {
    it('Should return an array of objects with team data and rosters', (done) => {
      NHL.Teams.getRosters('20032004').then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Get all players from a single roster', () => {
    it('Should return an array of players', (done) => {
      NHL.Teams.getRoster(NHL.Teams.getID('Tampa Bay Lightning')).then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Get all players from a single roster', () => {
    it('Should return an array of players', (done) => {
      NHL.Teams.getRoster(NHL.Teams.getID('Tampa Bay Lightning'), '20032004').then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Get all current team stats', () => {
    it('Should return an array of stats', (done) => {
      NHL.Teams.getStats(NHL.Teams.getID('Tampa Bay Lightning')).then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })


  describe('Get all team stats from a season', () => {
    it('Should return an array of stats', (done) => {
      NHL.Teams.getStats(NHL.Teams.getID('Tampa Bay Lightning'), '20032004').then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })

  describe('Get all current team stat rankings', () => {
    it('Should return an array of stat rankings', (done) => {
      NHL.Teams.getStatRankings(NHL.Teams.getID('Tampa Bay Lightning')).then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })


  describe('Get all team stat rankings from a season', () => {
    it('Should return an array of stat rankings', (done) => {
      NHL.Teams.getStatRankings(NHL.Teams.getID('Tampa Bay Lightning'), '20032004').then(res => {
        expect(res).to.be.an('array')
        done()
      }).catch(err => {
        done(new Error('This didn\'t work'))
      })
    })
  })
})
