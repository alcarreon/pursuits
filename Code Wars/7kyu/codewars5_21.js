// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

const gimme = (arr) => {
  let sortedArr = [...arr].sort((x, y) => x - y);
  let middleValue = arr.indexOf(sortedArr[1]);
  return middleValue;
};

console.log(gimme([2, 3, 1])); // 0
console.log(gimme([5, 10, 14])); // 1
console.log(gimme([2.1, 3.2, 1.4])); // 0
console.log(gimme([5.9, 10.4, 14.2])); // 1
console.log(gimme([-2, -3.2, 1])); // 0
console.log(gimme([-5.2, -10.6, 14])); // 0
