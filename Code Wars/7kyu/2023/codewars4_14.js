// Convert Hash To An Array

// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// parameters object
// return array
// examples
// pseudo code given an object convert it into an array using .entries and then sort it

function convertHashToArray(obj) {
  return Object.entries(obj).sort();
}

// console.log(convertHashToArray({ name: "Jeremy" })); // [["name", "Jeremy"]]

console.log(convertHashToArray({ name: "Jeremy", age: 24 })); // [["age", 24], ["name", "Jeremy"]]

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
); // [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 })); // [["powerLevelOver", 9000], ["product", "CodeWars"]]

console.log(convertHashToArray({})); // []
