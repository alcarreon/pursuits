// Enumerable Magic #25 - Take the First N Elements

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// parameters array and integer
// return array
// examples
// pseudo code use slice to get the number of elements num from the array

function take(arr, num) {
  return arr.slice(0, num);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); // [0, 1, 2]
