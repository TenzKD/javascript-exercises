const sumAll = function (num1, num2) {
  let sum = 0;
  if (
    num1 < num2 &&
    num1 >= 0 &&
    num2 >= 0 &&
    typeof num2 !== "string" &&
    typeof num1 !== "string"
  ) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else if (num2 < num1 && num1 >= 0 && num2 >= 0) {
    for (let j = num2; j <= num1; j++) {
      sum += j;
    }
  } else {
    return "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
