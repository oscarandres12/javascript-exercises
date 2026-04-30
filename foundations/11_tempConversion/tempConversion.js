const convertToCelsius = function(degreesFahrenheit) {
  let degreesCelsius = (degreesFahrenheit - 32) * (5/9);
  let roundedCelsius = Math.round(degreesCelsius * 10) / 10;
  return(roundedCelsius);
};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesFahrenheit = degreesCelsius * (9 / 5) + 32;
  let roundedFahrenheit = Math.round(degreesFahrenheit * 10) / 10;
  return(roundedFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
