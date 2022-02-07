const ftoc = function (f) {
  let cels = (f - 32) * (5 / 9);
  return Math.round(cels * 10) / 10;
};

const ctof = function (c) {
  let fahr = c * (9 / 5) + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
