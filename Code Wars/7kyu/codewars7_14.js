// Array Appender
// Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

// All inputs will be arrays/nested arrays.

// For example:

// ['a','b','c'], [1,2,3]     --> ['a','b','c',1,2,3]
// [['x','x'],'B'], ['c','D'] --> [['x','x'],'B','c','D']

// parameters two arrays
// returns array
// examples
// psuedo code given two arrays use concat to combine them

const appendArrays = (arr1, arr2) => arr1.concat(arr2);

// console.log(appendArrays([1, 2], [2, 4])); // [1,2,2,4]
// console.log(appendArrays([["x", "x"], "B"], ["c", "D"])); // [['x','x'],'B','c','D']
// console.log(appendArrays([1, 2], [3, 4])); // [1,2,3,4]
// console.log(appendArrays(["this"], ["that"])); // ['this','that']
// console.log(appendArrays(["a", "B"], ["c", "D"])); // ['a','B','c','D']
// console.log(appendArrays([1, 2], [1])); // [1,2,1]

// Filter Coffee
// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

// parameters number and array
// returns string
// examples
// pseudo code use filter to find all prices less than the provided number, then sort the array in ascedning order, finally join the array into a string

const search = (num, arr) =>
  arr
    .filter((x) => x <= num)
    .sort((x, y) => x - y)
    .join();

console.log(search(3, [6, 1, 2, 9, 2])); // "1,2,2"
console.log(search(14, [7, 3, 23, 9, 14, 20, 7])); // "3,7,7,9,14"
console.log(search(0, [6, 1, 2, 9, 2])); // ""
