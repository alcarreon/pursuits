// How many are smaller than me?

// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// parameters array
// return array
// examples
// pseudo code create a variable with an empty array, iterate over the array and check to see if the current element is greater than the rest of the elements of the array push the length of that array to the holder variable

function smaller(arr) {
  let holder = [];
  arr.forEach((x, y) => {
    holder.push(arr.slice(y + 1).filter((a) => a < x).length);
  });
  return holder;
}

console.log(smaller([5, 4, 3, 2, 1])); // [4, 3, 2, 1, 0]

console.log(smaller([1, 2, 3])); // [0, 0, 0]

console.log(smaller([1, 2, 0])); // [1, 1, 0]

console.log(smaller([1, 2, 1])); // [0, 1, 0]

console.log(smaller([1, 1, -1, 0, 0])); // [3, 3, 0, 0, 0]

console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])); // [4, 1, 5, 5, 0, 0, 0, 0, 0]
