// The highest profit wins!

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// parameters array of numbers
// returns array with two elements (lowest, highest)
// examples
// pseudo code given an array of numbers sort it in ascending order, then create a new array to return with the first element being the first element of the sorted array, and the second element being the last

const minMax = (arr) => {
  const sortedArr = [...arr].sort((x, y) => x - y);
  return [sortedArr[0], sortedArr[sortedArr.length - 1]];
};

// console.log(minMax([1, 2, 3, 4, 5])); // [1,5]
// console.log(minMax([2334454, 5])); // [5, 2334454]
// console.log(minMax([5])); // [5,5]

// Find the capitals
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// parameters string
// returns array of numbers
// examples
// pseudo code given a string split it by each character, then filter out only the strings that are capitalized by comparing the element to the element.toUpperCase, finally run through the array of capital lets and find their index using map

const capitals = (str) => {
  let strArr = str.split("");
  return strArr
    .filter((x) => x.toUpperCase() == x)
    .map((x) => strArr.indexOf(x));
};

console.log(capitals("CodEWaRs")); // [0,3,4,6]
