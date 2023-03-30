// Sum a list but ignore any duplicates

// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// parameters array
// return integer
// examples
// pseudo code given an array iterate through it with filter and remove any elements that appear more than once by checking their index and last index, if the array is empty return 0 otherwise use reduce

function sumNoDuplicates(arr) {
  let unique = arr.filter((x) => arr.indexOf(x) == arr.lastIndexOf(x));
  return unique.reduce((x, y) => x + y, 0);
}

console.log(sumNoDuplicates([7, 1, 8, 8, 5, 5, 1, 4, 0, 1, 10, 1])); // 21

console.log(sumNoDuplicates([1, 1, 2, 3])); // 5

console.log(sumNoDuplicates([1, 1, 2, 2, 3])); // 3

console.log(sumNoDuplicates([1, 9, 9, 5, 7, 7, 6, 1, 5, 6])); // 0
