// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let summation = (num) => {
  let theNums = [];
  for (let i = 1; i <= num; i++) {
    theNums.push(i);
  }
  return theNums.reduce((x, y) => x + y);
};

// console.log(summation(1)); // 1
// console.log(summation(8)); // 36

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

const century = (year) => Math.ceil(year / 100);
console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(100)); // 1
