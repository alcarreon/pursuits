// Return a sorted list of objects

// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

// parameters array
// returns array
// examples
// pseudo code given an proprty to sort by and an array of objects use sort and bracket notation to sort each element of the array

arr1 = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];

const sortList = (sortBy, arr) => arr.sort((x, y) => y[sortBy] - x[sortBy]);

console.log(sortList("a", arr1));
