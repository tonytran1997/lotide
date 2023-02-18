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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false

module.exports = eqObjects;