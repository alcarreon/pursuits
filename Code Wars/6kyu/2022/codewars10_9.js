// Prefill an Array

// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]

//     prefill(2,"abc") --> ['abc','abc']

//     prefill("1", 1) --> [1]

//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]

//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"

// parameters number, other value
// return array
// example
// pseudo code check to see if the the number is a number using parseInt, and then check to see that it is not negative, if either of those are false throw an error, otherwise use Array() to create a new array as long as num, and use fill to fill the array with the provided value

const prefill = (num, val) => {
  console.log(parseInt(num));
  if (parseInt(num) !== Math.abs(num)) throw new TypeError(`${num} is invalid`);
  return +num ? Array(num).fill(val) : [];
};

// console.log(prefill(3, 1)); // [1,1,1]

// console.log(prefill(2, "abc")); // ['abc','abc']

console.log(prefill("1", 1)); // [1]

// console.log(prefill(3, prefill(2, "2d"))); // [['2d','2d'],['2d','2d'],['2d','2d']]

// console.log(prefill("xyz", 1)); //
