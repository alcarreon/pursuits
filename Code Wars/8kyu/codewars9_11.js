// Sum of differences in array
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// parameters array
// return number
// examples
// pseudo code given an array sort it in descending order and create an empty variable to hold the result, iterate through the sorted array and make sure that you do not reach the last element of the array

const sumOfDifferences = (arr) => {
  let sortedArr = arr.sort((x, y) => y - x);
  let holder = 0;
  sortedArr.forEach((x, y) => {
    if (y < arr.length - 1) {
      holder += x - sortedArr[y + 1];
    }
  });
  return holder;
};

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
