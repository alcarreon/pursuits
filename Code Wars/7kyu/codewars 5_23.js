// Form The Minimum

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// parameters array
// returns number
// examples
// psuedo code given an array remove all duplicates using set, then sort the array in ascending order, then join the array back into a string, and finally convert the string into a number

const minValue = (arr) => +[...new Set(arr)].sort((x, y) => x - y).join("");

// console.log(minValue([1, 3, 1])); // 13
// console.log(minValue([4, 7, 5, 7])); // 457
// console.log(minValue([4, 8, 1, 4])); // 148
// console.log(minValue([5, 7, 9, 5, 7])); // 579
// console.log(minValue([6, 7, 8, 7, 6, 6])); // 678
// console.log(minValue([5, 6, 9, 9, 7, 6, 4])); // 45679
// console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); // 134679
// console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])); // 356789
// console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 1

// Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// parameters array of numbers
// returns string
// examples
// pseudo code sort the array by converting the numbers into string in order to find their length, then get the first element from the array at index 0

const findLongest = (arr) =>
  arr.sort((x, y) => y.toString().length - x.toString().length)[0];

console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000
console.log(findLongest([8, 900, 500])); // 900
