const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  /* if (arr == "") {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.reduce((a, b) => {
      return a + b;
    });
  } */
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => {
    return a * b;
  });
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let factor = 1;
  if (a === 0) {
    return 1;
  } else {
    for (let i = 1; i <= a; i++) {
      factor *= i;
    }
    return factor;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
