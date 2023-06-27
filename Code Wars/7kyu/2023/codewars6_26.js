// Sort rectangles and circles by area II

// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

// parameters array
// return array
// examples
// pseudo code create a helper function which uses a map to check to see if the elements are an array if they are multiply the first element by the second otherwise multiply the number by itself and pi, finally sort the array

function area(nums) {
  return nums.map ? nums[0] * nums[1] : Math.PI * nums * nums;
}

function sortByArea(arr) {
  return arr.sort((x, y) => area(x) - area(y));
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); // [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]

// console.log(sortByArea([[2, 5], 6])); // [ [2, 5], 6 ]

// console.log(sortByArea([])); // []
