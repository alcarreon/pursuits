// Palindromes Here and There
// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

// For example:

// [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
// [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

// parameters array
// return array
// examples
// pseudo code iterate over the array checking to see if the original number is equal to it being converted into a string split reversed and joined back together and then converted back into a number

function convertPalindromes(arr) {
  return arr.map((x) =>
    x == +x.toString().split("").reverse().join("") ? (x = 1) : (x = 0)
  );
}

// console.log(convertPalindromes([22, 303, 76, 411, 89])); // [1, 1, 0, 0, 0]

// console.log(convertPalindromes([653, 808, 5])); // [0, 1, 1]

// console.log(convertPalindromes([4, 23, 441, 565, 19, 818])); // [1, 0, 0, 1, 0, 1]
