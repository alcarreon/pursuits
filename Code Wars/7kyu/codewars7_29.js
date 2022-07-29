// Printing Array elements with Comma delimiters
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// parameters array
// returns string
// examples
// pseudo code use .join(',') to convert the array into a string sepererated by commas
let nums = [2, 4, 5, 2];
let strings = ["h", "o", "l", "a"];

const printArray = (arr) => arr.join(",");

console.log(printArray(nums)); // "2,4,5,2"
console.log(printArray(strings)); // "h,o,l,a"
