var leapYears = function(year) {
  //for century years
  if ((year % 100 === 0) && (year % 400 === 0)) {
    return true;
  }
  // for non-century years
  else if ((year % 100 !== 0) && (year % 4 === 0)) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = leapYears
