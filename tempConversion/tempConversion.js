var ftoc = function(fahrenheit) {
  // formula to convert fahrenheit to celcius
  const celcius = (5 / 9) * (fahrenheit - 32);
  // round the number to 1 decimal place
  roundedCelcius = Math.round( celcius * 10 ) / 10;
  // return the rounded value
  return roundedCelcius;
}

var ctof = function(celcius) {
  // formula to convert celcius to fahrenheit
  const fahrenheit = (celcius * (9/5)) + 32;
  // round the number to 1 decimal place
  roundedFahrenheit = Math.round( fahrenheit * 10 ) / 10;
  // return the rounded value
  return roundedFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
