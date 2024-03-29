// Incrementer
// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that

// parameters array
// returns array
// examples
// psuedo code given an array iterate through the array adding the index and element together plus one then check to see if the number is greater than ten use modulus to get the remainder

const incrementer = (arr) =>
  arr.map((x, y) => (x + y + 1 >= 10 ? (x + y + 1) % 10 : x + y + 1));

// console.log(incrementer([1, 2, 3])); // [2, 4, 6]
// console.log(incrementer([4, 6, 7, 1, 3])); // [5, 8, 0, 5, 8]
// console.log(incrementer([3, 6, 9, 8, 9])); // [4, 8, 2, 2, 4]
// console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8])); // [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
