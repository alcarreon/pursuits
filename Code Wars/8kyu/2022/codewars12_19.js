// Enumerable Magic - Does My List Include This?
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// parameters array number
// return boolean
// examples
// pseudo code given an array use the method includes with the item given by the user

function include(arr, item) {
  return arr.includes(item);
}

console.log(include([1, 2, 3, 4], 3)); // true
console.log(include([1, 2, 4, 5], 3)); // false
console.log(include([], 3)); // false
