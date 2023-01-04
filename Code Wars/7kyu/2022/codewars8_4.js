// Lowercase strings in array

// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// parameters array
// returns array
// examples
// psuedo code given an array use map to iterate through the array and check to see if the element in the array is a string if it is lowercase the string otherwise return the element

const arrayLowerCase = (arr) =>
  arr.map((x) => (typeof x == "string" ? x.toLowerCase() : x));

console.log(arrayLowerCase(["Red", "Green"])); // ['red', 'green']
console.log(arrayLowerCase([1, "Green"])); // [1, 'green']
