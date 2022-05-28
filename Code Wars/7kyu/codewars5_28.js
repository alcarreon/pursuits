// Basic Sequence Practice

// Your Task
// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with n\watchegative terms.

// parameters number
// returns array of numbers
// examples
// pseudo code create an empty variable to store an array, and another to store the values being added, check to see if the number is positive if it is add one to the previous value and push it to the array until it reachs the end condition specified by the user, do the same thing for negative numbers except subtract one from the starting empty number variable, lastly check to see if the number is 0 to then push 0 to the array

const sumOfN = (num) => {
  let startArr = [];
  let starter = 0;
  if (Math.sign(num) == 1) {
    for (let i = 0; i <= num; i++) {
      startArr.push((starter += i));
    }
  } else if (Math.sign(num) == -1) {
    for (let i = 0; i >= num; i--) {
      startArr.push((starter += i));
    }
  } else {
    startArr.push(0);
  }
  return startArr;
};

// console.log(sumOfN(3)); // [0, 1, 3, 6]
// console.log(sumOfN(-4)); // [0, -1, -3, -6, -10]
// console.log(sumOfN(1)); // [0,1]
// console.log(sumOfN(-6)); // [0, -1, -3, -6, -10, -15, -21]

// Even numbers in an array

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// parameters array and number
// returns array
// examples
// pseudo code given an array filter the array to only have even elements, then index the array by the negative value of the user provided number

const evenNumbers = (arr, num) => {
  return arr.filter((x) => x % 2 == 0).slice(-num);
};

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // [-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); // [6]
