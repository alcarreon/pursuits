// Smallest value of an array

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// parameters array and string
// returns number
// examples
// pseudo code given an array of numbers destructure the list to maintain the original list then sort the array in ascending order using sort, then check to see if the provided string is value if it is value return the first element of the sorted array otherwise find the index in the orginal array of the first element of the sorted array

const min = (arr, str) => {
  const sortedArr = [...arr].sort((x, y) => x - y);
  return str == "value" ? sortedArr[0] : arr.indexOf(sortedArr[0]);
};

// console.log(min([1, 2, 3, 4, 5], "value")); // 1
// console.log(min([1, 2, 3, 4, 5], "index")); // 0
// console.log(min([5, 6, 1, 2], "value")); // 1
// console.log(min([5, 6, 1, 2], "index")); // 2

// Binary Addition
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// parameters two numbers
// returns number
// examples
// psuedo code add the numbers together then convert them into binary using .toString() where the number inside the parenthesis is the base of the number you want to convert to

const addBinary = (num1, num2) => {
  const totalNum = (num1 + num2).toString(2);
  return totalNum;
};

console.log(addBinary(1, 1)); // 10
console.log(addBinary(5, 9)); // 1110
