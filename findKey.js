const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

const findKey = function (object, callback) {
  let keyArray = Object.keys(object);
  for (let i = 0; i < keyArray.length; i++) {
    if (callback(object[keyArray[i]])) {
      return keyArray[i];
    }
  }
  return undefined;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

module.exports = findKey;