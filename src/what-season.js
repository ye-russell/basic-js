const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined ) {
    return 'Unable to determine the time of year!'

  }
  else if (Object.prototype.toString.call(date) == '[object Date]') {
    let month = date.getMonth();
    if (month >= 2 && month <= 4) return 'spring'
    if (month >= 5 && month <= 7) return 'summer'
    if (month >= 8 && month <= 10) return 'autumn'
    if (month == 11 || month == 0 || month == 1) return 'winter'
  }
  else {
    throw new Error();
  }
}
