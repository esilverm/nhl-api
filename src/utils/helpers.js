module.exports = {

  /**
   * Check if date is valid
   * Valid format is YYYY-MM-DD
   *
   * @param {string} date - date
   * @return {boolean} whether date is correct or not
   */
  isValidDateFormat: (date) => {
    const regex = /^(19|20\d\d)[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
    const matches = date.match(regex);
    if (matches) {
      const month = matches[2];
      const day = matches[3];
      return !((month === '02' && day > '28')
        || ((month === '04' || month === '06' || month === '09' || month === '11')
        && day > '30'));
    }
    return false;
  },

  /**
   * Check if date1 (start) comes before date2 (3nd)
   *
   * @param {string} date1 - start date1
   * @param {string} date2 - end date
   * @return {boolean}
   */
  isTimeframeValid: (date1, date2) => {
    return new Date(this.formatDate(date2)) > new Date(this.formatDate(date1))
  },

  /**
   * Helper function to be used with isTimeframeValid.
   * Will turn date format from YYYY-MM-DD to MM/DD/YYYY
   *
   * @param {string} date - date in format YYYY-MM-DD
   * @return {string} date in format MM/DD/YYYY
   */
  formatDate: (date) => {
    let dateArray = date.split('-');
    dateArray.push(dateArray.shift());
    return dateArray.join('/');
  },

  /**
   * Check if the provided season is in valid format
   * Valid format is YYYYYYYY
   *
   * @param {string} season - season
   * @return {boolean} is the provided season in valid format
   */
  isValidSeasonFormat: (season) => {
    if (season.length !== 8) {
      return false;
    }
    const year1 = season.substr(0, 4);
    const year2 = season.substr(4, 4);
    return !(year1 > year2 || year2 - year1 !== 1);
  },
}
