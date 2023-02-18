const eqArrays = function (array1, array2) {
  let result = true;
    
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i] === false))) {
        return false;
      }
      if (array1.length !== array2.length) {
        return false;
      }
      if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]){
        return false;
      }
    }
    return result;
  };

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};  

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
    for (let i = 0; i < sentence.length; i++) {
      let letter = sentence[i];
      if (letter === ' ') {
        continue;
      } else if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  return results;
};

console.log(assertArraysEqual(letterPositions("hello").e, [1]));

module.exports = letterPositions;