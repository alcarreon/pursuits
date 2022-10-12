// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// parameters array
// return number
// examples
// pseudo code given an array use reduce to create an object holding the number of times each unique number appears in the array, then turn the object into an array using Object.entries, finally filter the array that was made from the entries checking to see if the current elements second index is odd, if it is return that element

const findOdd = (arr) => {
  let countedNums = arr.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});
  let nums = Object.entries(countedNums);
  let answer = nums.filter((x, y) => {
    if (x[1] % 2 == 1) {
      return nums[y][0];
    }
  });
  return +answer[0][0];
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1

// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5

// console.log(findOdd([10])); // 10

// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10

// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
