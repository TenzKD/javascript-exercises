const fibonacci = function (numb) {
  if (numb < 0) {
    return "OOPS";
  } else {
    let fibo = [1, 1];
    for (let i = 2; i < numb; i++) {
      fibo.push(fibo[i - 2] + fibo[i - 1]);
    }
    return fibo[numb - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
