// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

let SeriesSum = (n) => {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
};

// console.log(SeriesSum(1)); // "1.00"
// console.log(SeriesSum(2)); // "1.25"
// console.log(SeriesSum(3)); // "1.39"
// console.log(SeriesSum(4)); // "1.49"

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

let number = (arr) => arr.map((x, y) => `${y + 1}: ${x}`);

// console.log(number([])); // []
// console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

let dontGiveMeFive = (s, e) => {
  for (cnt = 0; s <= e; ++s) {
    (s + "").includes("5") || cnt++;
  }
  return cnt;
};

// let dontGiveMeFive = (num1, num2) => {
//     starter = []
//     for(num1; num1 <= num2; num1++){
//         num1 % 5 !== 0 ? starter.push(num1) : starter
//     } return starter.length
// }
console.log;
// console.log(dontGiveMeFive(1, 9)); // 8
console.log(dontGiveMeFive(4, 17)); // 12
