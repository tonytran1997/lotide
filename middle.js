/*const eqArrays = function (array1, array2) {
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
};*/

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[Math.floor(array.length / 2)]];
  } else {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  }
};

module.exports = middle;