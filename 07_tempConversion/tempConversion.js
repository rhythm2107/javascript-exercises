const convertToCelsius = (temp) => {
  let convert = (temp - 32) * (5 / 9)
  return Number(convert.toFixed(1))
};

const convertToFahrenheit = (temp) => {
  let convert = (temp * (9 / 5) + 32)
  return Number(convert.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
