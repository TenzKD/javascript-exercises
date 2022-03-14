const palindromes = function (str) {
  let punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
  let cleanStr = str
    .toLowerCase()
    .split("")
    .filter((letter) => {
      return punctuation.indexOf(letter) === -1;
    })
    .join("");

  let newStr = cleanStr.split("").reverse().join("");
  return cleanStr.toLowerCase() === newStr.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
