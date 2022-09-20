// Enumerable Magic #1 - True for All?
// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

// parameters array, function
// return boolean
// examples
// pseudo code check to see if the length of the array is zero if it is return true, otherwise iterate through the array using filter and passing the element to the function check the sizes both arrays

const all = (arr, fun) => {
  if (arr.length == 0) {
    return true;
  } else {
    const holder = arr.filter((x) => fun(x));
    return arr.length == holder.length;
  }
};

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  })
); // true
console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  })
); // false

console.log(
  all([], function (v) {
    return v > 9;
  })
); // false
