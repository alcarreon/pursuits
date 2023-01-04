// Homogenous arrays
// Challenge:

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

// Addendum:

// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

// The resultant arrays should be in the order they were originally in and should not have its values changed.

// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

// parameters array
// returns array
// examples
// pseudo code given a nested array create an empty variable to hold what will be returned, then using a for loop iterate through each element of the listed array, using set to see if all of the elements have the same type and the length of the array is not 0

const filterHomogenous = (arr) => {
  let starter = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      [...new Set(arr[i].map((x) => typeof x))].length <= 1 &&
      arr[i].length != 0
    ) {
      starter.push(arr[i]);
    }
  }
  return starter;
};

// console.log(filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]])); // [[1, 5, 4], ['b']]

// console.log(
//   filterHomogenous([[123, 234, 432], ["", "abc"], [""], ["", 1], ["", "1"], []])
// ); // [[123, 234, 432], ['', 'abc'], [''], ['', '1']]

// For the sake of argument
// Write a function named numbers.

// function should return True if all parameters are of the Number type.

// The function should accept any number of parameters.

// parameters any input
// returns boolean
// examples
// pseudo code given some inputs check to see if every element is of the type number or is NaN using filter then check the length of that array to that the length of the inputs provided

const numbers = (...args) => {
  return (
    args.filter((x) => typeof x == "number" || Number.isNaN(x)).length ==
    args.length
  );
};

console.log(numbers(1, 4, 3, 2, 5)); // true
console.log(numbers(1, "a", 3)); // false
console.log(numbers(1, 3, NaN)); // true
