const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let count = {};

  for (let letter of string) {
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }
  return count;
};

const result = countLetters("hihihihihihihihihi")
console.log(assertEqual(result["h"], 1));
console.log(assertEqual((result["i"], 2)));

module.exports = countLetters;