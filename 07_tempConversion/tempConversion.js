const ftoc = function (temp) {
  let cels = (temp - 32) * (5 / 9);
  return Math.round(cels * 10) / 10;
};

const ctof = function (temp) {
  let fahr = temp * (9 / 5) + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
