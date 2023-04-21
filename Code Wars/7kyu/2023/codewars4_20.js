// 99 Problems, #1: last in list

// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null

// parameters array
// return null or integer
// examples
// pseudo code check the length of the array to see if it is empty otherwise use slice to get the last element
function last(arr) {
  return arr.length == 0 ? null : arr.slice(-1)[0];
}

console.log(last([1, 2, 3])); // 3

console.log(last([])); // null
