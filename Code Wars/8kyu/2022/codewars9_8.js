// pick a set of first elements
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// parameters array and number
// return array
// examples
// psuedo code set the default for the number equal to 1 then slice the array

const arr = ["a", "b", "c", "d", "e"];
const first = (arr, n = 1) => arr.slice(0, n);

console.log(first(arr)); // ['a']
console.log(first(arr, 2)); // ['a', 'b']
