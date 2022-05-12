// function bulbMaze(map){
//     const pos = ['x', 'o']
//     const arr = [...map]
//     const result = arr.map((el, i) => el === ' ' || el === pos[i % 2])
//     return result.every(el => el === true)
//   }

let bulbMaze = (map) => {
  let pos = ["x", "o"];
  let arr = [...map];
  let result = arr.map((el, i) => el === " " || el === pos[i % 2]);
  return result.every((el) => el === true);
};
// console.log(bulbMaze("xo oxox")); // true
// console.log(bulbMaze("xo  oxox")); // false

// Task
// Given a number N, determine if the sum of N consecutive numbers is odd or even.

// If the sum is definitely an odd number, return Odd.
// If the sum is definitely an even number, return Even.
// If the sum can be either odd or even ( depending on which first number you choose ), return Either.
// Examples
// Odd_or_Even(1) should return Either, because the sum can be odd or even.
// Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
// Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
let oddOrEven = (num) => {
  if (num % 2 !== 0) {
    return "Either";
  }
  if ((num / 2) % 2 === 0) {
    return "Even";
  }
  if ((num / 2) % 2 !== 0) {
    return "Odd";
  }
};

console.log(oddOrEven(1)); // 'EITHER
console.log(oddOrEven(6)); // 'ODD'
console.log(oddOrEven(8)); // 'EVEN'
