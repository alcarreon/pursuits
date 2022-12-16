// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// parameters array
// return array
// examples
// pseudo code given an array use set to remove duplicates and wrap it in array literal notation to make it into an array

function distinct(arr) {
  return [...new Set(arr)];
}

console.log(distinct([1])); // [1]

console.log(distinct([1, 2])); // [1, 2]

console.log(distinct([1, 1, 2])); // [1,2]
