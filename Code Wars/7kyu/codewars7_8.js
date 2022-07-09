// Nth Smallest Element (Array Series #4)
// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers
// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// parameters array and number
// returns number
// examples
// pseudo code create a new variable to hold the sorted array, then use sort to sort the array in ascending order, subtract one from the user provided number to access that index of the array

const nthSmallest = (arr, num) => {
  let sortedArr = arr.sort((x, y) => x - y);
  return sortedArr[num - 1];
};

// console.log(nthSmallest([3, 1, 2], 2)); // 2
// console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)); // 7
// console.log(nthSmallest([-5, -1, -6, -18], 4)); // -1
// console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5)); // -2
// console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4)); // 2

// Partial Word Searching
// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

// parameters string and array
// returns array
// examples
// pseudo code given an array use filter to convert each element to lowercase and compare it to the provided string which has been converted into lowercase, finally check to see if the filtered array is empty and return an array with the element of 'empty' otherwise return the filtered array

const wordSearch = (str, arr) => {
  let results = arr.filter((x) => x.toLowerCase().includes(str.toLowerCase()));
  return results.length == 0 ? ["Empty"] : results;
};

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]

console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])); // ["aB", "Abc", "zAB"]

console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])); // ["Empty"]
