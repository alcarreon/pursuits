// Last Survivor

// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// parameters string and array
// returns string
// examples
// pseudo code given a string split it by each character, then use a for loop to splice the string with a deletecount of 1

const lastSurvivor = (str, arr) => {
  let strArr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    strArr.splice(arr[i], 1);
  }
  return strArr.join();
};

// console.log(lastSurvivor("abc", [1, 1])); // 'a'
// console.log(lastSurvivor("kbc", [0, 1])); // 'b'
// console.log(lastSurvivor("zbk", [2, 1])); // z
// console.log(lastSurvivor("c", [])); // 'c'
// console.log(lastSurvivor("zbk", [0, 1]));
// console.log(
//   lastSurvivor(
//     "foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr",
//     [
//       8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23,
//       56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55,
//       24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39,
//       36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7,
//       0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1,
//     ]
//   )
// ); // 'd'

// Use reduce() to calculate the sum of the values in an array
// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// parameters array
// returns number
// examples
// pseudo code given an array use the reduce method to find the product of all the elements in the array

var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var test2 = [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38];

const sum = (arr) => arr.reduce((x, y) => x + y);

console.log(sum(test1)); // 55
console.log(sum(test2)); // 32830.6
