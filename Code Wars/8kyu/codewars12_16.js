// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// parameters array
// return array
// examples
// pseudo code given an array filter through it checking that the last index of the element is equal to the current index

function distinct(arr) {
  return arr.filter((x, y) => arr.indexOf(x) == y);
}

console.log(distinct([1])); // [1]

console.log(distinct([1, 2])); // [1, 2]

console.log(distinct([1, 1, 2])); // [1,2]
