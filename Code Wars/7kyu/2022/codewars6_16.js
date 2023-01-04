// Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// parameters string
// returns array
// examples
// pseudo code given a string split it by spaces to turn it into an array, then sort the array by getting the last character of each element and comparing it to the next to sort it alphabeticaly

const last = (str) => {
  let strArr = str.split(" ");
  return strArr.sort((x, y) => {
    if (x[x.length - 1] > y[y.length - 1]) {
      return 1;
    } else if (x[x.length - 1] < y[y.length - 1]) {
      return -1;
    } else {
      return 0;
    }
  });
};

// console.log(last("man i need a taxi up to ubud")); // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// console.log(last("what time are we climbing up the volcano")); // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// console.log(last("take me to semynak")); // ['take', 'me', 'semynak', 'to']

// Pluck
// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// parameters array and string
// returns array
// examples
// pseudo code given an array and a string use bracket notation to see if the name is a key in the object

const pluck = (arr, names) => arr.map((x) => x[names]);

console.log(pluck([{ a: 1 }, { a: 2 }], "a")); // [1,2]
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], "b"));
