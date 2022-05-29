// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// parameters two strings
// returns boolean
// examples
// pseudo code given two strings lowercase all characters and then split them by each character into an array, sort them alphabetically and join them back into a string, then check to see if the length of the strings are the same, if they are check to see if they are deeply equal to each other

const isAnagram = (str1, str2) => {
  let str1Arr = str1.toLowerCase().split("").sort().join();
  let str2Arr = str2.toLowerCase().split("").sort().join();
  if (str1.length !== str2.length) {
    return false;
  } else if (str1Arr === str2Arr) {
    return true;
  } else {
    return false;
  }
};

// console.log(isAnagram("foefet", "toffee")); // true
// console.log(isAnagram("Buckethead", "DeathCubeK")); // true
// console.log(isAnagram("Twoo", "WooT")); // true
// console.log(isAnagram("dumble", "bumble")); // false
// console.log(isAnagram("ound", "round")); // false
// console.log(isAnagram("apple", "pale")); // false

// Sum of Minimums!
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// parameters 2d array
// returns number
// examples
// pseudo code given an array map through it and destructure the array at each index to

const sumOfMinimums = (arr) => {
  return arr.map((x) => Math.min(...x)).reduce((x, y) => x + y);
};

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
); // 9
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ])
); // 76

// Number of Decimal Digits
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// parameters number
// returns number
// examples
// pseudo code given a number convert it into a string and find the length of the string

const digits = (num) => num.toString().length;

console.log(digits(5)); // 1
console.log(digits(12345)); // 5
console.log(digits(9876543210)); // 10
