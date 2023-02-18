const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let results = false;

  if (key1.length === key2.length) {
    key1.forEach(element => {
      if (key2.includes(element) && object1[element] === object2[element]) {
        results = true;
      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        results = eqArrays(object1[element], object2[element]);
      } else {
        results = false;
      }
    });
  }
  return results;
};

const assertObjectEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log(assertObjectEqual(eqObjects([1, 2, 3], [1, 2, 3]), true)); // => true

module.exports = assertObjectEqual;
