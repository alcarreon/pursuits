// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// parameters string
// returns string
// examples
// psuedo code given a string take the first element of the string and capitalize it using .toUpperCase() then use slice to get the rest of the element using slice
const greet = (str) => {
  first = str[0].toUpperCase();
  rest = str.slice(1).toLowerCase();
  return `Hello ${first}${rest}!`;
};

// console.log(greet("riley")); // 'Hello Riley!'
// console.log(greet("JACK"));

// Flatten

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// parameters array of nested arrays
// results array flattened by one level
// examples
// pseudo code create a new array and concatenate the elements from the first array into it, to flatten the elements before adding them to the new array desctructure the list

const flatten = (arr) => [].concat(...arr);

// console.log(flatten([1, 2, 3])); // [1, 2, 3]
// console.log(
//   flatten([
//     [1, 2, 3],
//     ["a", "b", "c"],
//     [1, 2, 3],
//   ])
// ); // [1, 2, 3, "a", "b", "c", 1, 2, 3]
// console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])); // [[3], [4], [5], 9, 9, 8, [1, 2, 3]]

// Return the Missing Element
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

const getMissingElement = (arr) => {
  for (let i = 0; i <= 9; i++) {
    if (arr.indexOf(i) == -1) {
      return i;
    }
  }
};

// console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
// console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3
