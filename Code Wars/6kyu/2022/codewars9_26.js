// Sort odd and even numbers in different order
// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

// For example:

// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]

// parameters array
// return array
// examples
// pseudo code given an array create a variable to hold the array that contains odd numbers and sort it in ascending order, create another variable to hold the even numbers and sort it in descending order, iterate through the original array and check to see if the element is odd if it is use .shift on the odd array otherwise shift the even array

const sortArray = (arr) => {
  const odd = arr.filter((x) => x % 2).sort((a, b) => a - b);
  const even = arr.filter((x) => !(x % 2)).sort((a, b) => b - a);
  return arr.map((x) => (x % 2 ? odd.shift() : even.shift()));
};

// console.log(sortArray([5, 3, 2, 8, 1, 4, 11])); // [1, 3, 8, 4, 5, 2, 11]

// console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0])); // [22, 4, 1, 5, 2, 11, 37, 0]

// console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0])); // [1, 1, 5, 11, 2, 11, 111, 0]

// console.log(sortArray([])); // []

// let nums = [5, 3, 2, 8, 1, 4, 11];

// nums[0] = 10000;

// console.log(nums);
