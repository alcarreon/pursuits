// Between Extremes

// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

// parameters array
// return integer
// examples
// pseudo code use math.min and math.max to find the respsective values, destructure the array within the math.

function betweenExtremes(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12])); // 42

console.log(betweenExtremes([-1, -41, -77, -100])); // 99
