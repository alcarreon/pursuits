// PREP
// paramaters (str)
// returns (reversed words)
// examples (see below)
// pseudo take string and spaces and put them into an array for each element in the array reverse word in place join the list back together

const reverseWords = (str) => {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
  //   the first .split and .reverse and .join are for single spaced strings, the second .split etc is for double spaced strings
};

// console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
// console.log(reverseWords("apple")); // 'elppa'
// console.log(reverseWords("a b c d")); // 'a b c d'
// console.log(reverseWords("double  spaced  words")); // 'elbuod  decaps  sdrow'

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// paramaters array of numbers
// returns number which is not the same as the rest
// examples
// pseudo code check first element and see if it is not equal to the second, this will tell me that they are the

const stray = (arr) => {
  const filteredArr = arr.filter((x) => x != arr[1]);
  if (filteredArr.length == 1) {
    return filteredArr[0];
  } else {
    return arr[0];
  }
};
// console.log(stray([2, 1, 1]));
// console.log(stray([1, 1, 2])); // 2
// console.log(stray([17, 17, 17, 17, 3]));

// parameters number
// returns number of divisors
// examples
// pseudo code go from 1 - number and check to see if the modulus of each number is 0 if it is add it to a count starting off with 0

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

let getDivisorsCnt = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }
  return count;
};

// console.log(getDivisorsCnt(1)); // 1
// console.log(getDivisorsCnt(10)); // 4
// console.log(getDivisorsCnt(11)); // 2
// console.log(getDivisorsCnt(54)); // 8

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

const arithmetic = (num1, num2, operator) => {
  if (operator == "add") {
    return num1 + num2;
  } else if (operator == "subtract") {
    return num1 - num2;
  } else if (operator == "multiply") {
    return num1 * num2;
  } else if (operator == "divide") {
    return num1 / num2;
  }
};

// console.log(arithmetic(1, 2, "add")); // 3
// console.log(arithmetic(8, 2, "subtract")); // 6
// console.log(arithmetic(5, 2, "multiply")); // 10
// console.log(arithmetic(8, 2, "divide")); // 4

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// parameters three numbers, starting, end, step(inclusive)
// returns single value the sum of the numbers between starting and end moving by step
// examples
// psuedo code take start number and compare it to the end number if it is lower add step until it is bigger than end number

const sequenceSum = (start, end, step) => {
  let stepped = 0;
  for (start; start <= end; start += step) {
    stepped += start;
  }
  return stepped;
};

// console.log(sequenceSum(2, 6, 2)); // 12
// console.log(sequenceSum(1, 5, 1)); // 15
// console.log(sequenceSum(1, 5, 3)); // 5

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// parameters a number that is the upper limit
// returns sum of all multiples of 3 and 5
// examples
// pseudo code loop through the number once with multiples of 3 loop through again with multiples of 5 add them together

const findSum = (num) => {
  let counter = [];
  for (let i = 0; i <= num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      counter.push(i);
    }
  }
  return counter.reduce((x, y) => x + y);
};

console.log(findSum(5)); // 8
console.log(findSum(10)); // 33
