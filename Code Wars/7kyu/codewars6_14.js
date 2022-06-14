// Help the Fruit Guy
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// parameters array
// returns array
// examples
// pseudo code check to see if the array is null or empty then display an empty array, otherwise look for 'rotten' in each index of the array and if it includes it go to the first letter of the fruit and lowercase it and then join the rest of the string back together

const removeRotten = (arr) => {
  if (arr == null || arr.length == 0) {
    return [];
  } else {
    return arr
      .filter((x) => x != null)
      .map((x) => (x.includes("rotten") ? x[6].toLowerCase() + x.slice(7) : x));
  }
};

// console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"])); // ["apple","banana","kiwi","melone","orange"]
// console.log(removeRotten([])); // []
// console.log(removeRotten(["apple", "rottenBanana", "apple"])); // ["apple","banana","apple"]
// console.log(removeRotten([null]));

// What's my golf score?
// I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

// For example:

// If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
// If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
// Doing all this math by hand is really hard! Can you help make my life easier?

// Task Overview
// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.

// parameters two strings
// returns number
// examples
// pseudo code given two strings split them into arrays, then map through them subtracting the stroke from the par then reduce the list to find the total score

const golfScoreCalculator = (par, stroke) => {
  let parArr = par.split("");
  let strokeArr = stroke.split("");
  let eachScore = parArr
    .map((x, y) => strokeArr[y] - x)
    .reduce((x, y) => x + y);
  return eachScore;
};

// console.log(golfScoreCalculator("443454444344544443", "353445334534445344")); // -1
// console.log(golfScoreCalculator("123456123456123456", "123456123456123456")); // 0

// Get key/value pairs as arrays
// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// parameters object
// returns array
// examples
// pseudo code given an object use Object.keys and Object.values to conver them into arrays, then add those arrays to a larger one

const keysAndValues = (obj) => {
  let objKeys = Object.keys(obj);
  let objValues = Object.values(obj);
  return [objKeys, objValues];
};

// console.log(keysAndValues({ a: 1, b: 2, c: 3 })); // [['a', 'b', 'c'], [1, 2, 3]]
// console.log(keysAndValues({})); // [[], []]
// console.log(keysAndValues({ 1: "a", 2: "b", 3: "c" })); // [['1', '2', '3'], ['a', 'b', 'c']]
