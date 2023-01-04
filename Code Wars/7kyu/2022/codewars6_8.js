// Maximum Triplet Sum (Array Series #7)
// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// parameters array of numbers
// returns number
// examples
// pseudo code given an array remove duplicates using set, then sort the array in descending order, slice the first three elements from the array and reduce the array

const maxTriSum = (arr) =>
  [...new Set(arr)]
    .sort((x, y) => y - x)
    .slice(0, 3)
    .reduce((x, y) => x + y);

// console.log(maxTriSum([3, 2, 6, 8, 2, 3])); // 17
// console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])); // 32
// console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])); // 18
// console.log(maxTriSum([-3, -27, -4, -2, -27, -2])); // -9
// console.log(maxTriSum([-14, -12, -7, -42, -809, -14, -12])); // -33
// console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])); // 232
// console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])); // 41

// max diff - easy
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

// parameters array of numbers
// returns number
// examples
// pseudo code check to see if the array is empty if it is return 0 otherwise destructure the array to find the max and the min and subtract them

const maxDiff = (arr) =>
  arr.length == 0 ? 0 : Math.max(...arr) - Math.min(...arr);

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); // 11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); // 16
console.log(maxDiff([16])); // 0
console.log(maxDiff([])); // 0
