// Substring fun

// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// parameters array
// returns string
// examples
// pseudo code given an array iterate through it taking the letter from each index and then join the array back into a string

const nthChar = (arr) => arr.map((x, y) => x[y]).join("");

console.log(nthChar([])); // ''
console.log(nthChar(["yoda", "best", "has"])); // 'yes'
