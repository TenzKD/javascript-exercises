const palindromes = function (str) {
  let punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
  let cleanStr = str
    .split("")
    .filter((letter) => {
      return punctuation.indexOf(letter) === -1;
    })
    .join("");

  let newStr = cleanStr.split("").reverse().join("");
  if (cleanStr.toLowerCase() === newStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
