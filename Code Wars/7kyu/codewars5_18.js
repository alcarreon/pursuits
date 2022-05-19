// Currying functions: multiply all elements in an array
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// parameters array, function that takes a number
// returns array of numbers
// examples
// psuedo code currying take an array then take a number in another function use the array and number to map the num to each element in the array

let multiplyAll = (arr) => (num) => arr.map((x) => x * num);

// console.log(multiplyAll([1, 2, 3])(1)); // [1,2,3]
// console.log(multiplyAll([1, 2, 3])(2)); // [2,4,6]
// console.log(multiplyAll([1, 2, 3])(0)); // [0,0,0]
// console.log(multiplyAll([])(10)); // []

// Number Of Occurrences
// Write a function that returns the number of occurrences of an element in an array.

// parameters
// returns
// examples
// psuedo code

var arr = [4, 0, 4];
Array.prototype.numberOfOccurrences = function (num) {
  let occurrences = this.reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {});
  console.log(occurrences);
  //   return occurrences[num];
  //   return occurrences[num];
  if (occurrences[num] == undefined) {
    return 0;
  } else {
    return occurrences[num];
  }
};
// arr.numberOfOccurrences = function (num) {
//   let occurrences = arr.reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {});
//   return occurrences[num];
// };
console.log(arr.numberOfOccurrences(4));
