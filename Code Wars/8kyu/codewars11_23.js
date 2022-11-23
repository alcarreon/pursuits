// Twice as old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// parameters two integers
// return integer
// examples
// pseudo code use absolute value and then subtract twice the age of the sond from the dad

function twiceAsOld(dad, son) {
  return Math.abs(dad - son * 2);
}

console.log(twiceAsOld(36, 7)); // 22

console.log(twiceAsOld(55, 30)); // 5

console.log(twiceAsOld(42, 21)); // 0

console.log(twiceAsOld(22, 1)); // 20

console.log(twiceAsOld(29, 0)); // 29
