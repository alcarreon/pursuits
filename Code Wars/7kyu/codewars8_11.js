// Return the closest number multiple of 10

// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

// parameter integer
// return integer
// example
// pseudo code given an integer divide it by 10 and then round the result finally multiply it by 10

const closestMultiple10 = (num) => Math.round(num / 10) * 10;

console.log(closestMultiple10(22)); // 20
console.log(closestMultiple10(25)); // 30
console.log(closestMultiple10(37)); // 40
