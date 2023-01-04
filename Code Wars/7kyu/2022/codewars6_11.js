// Double Every Other
// Write a function that doubles every second integer in a list, starting from the left.

// parameters array
// returns array
// examples
// pseudo code given an array check to see if the index position is even if it is return the element back unchanged otherwsie multiply the element times two

const doubleEveryOther = (arr) => arr.map((x, y) => (y % 2 == 0 ? x : x * 2));

// console.log(doubleEveryOther([1, 2, 3, 4])); // [1,4,3,8]

// Evens times last
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.
// const evenLast = (arr) => {
//   let evens = arr.filter((x, y) => {
//     if (y % 2 == 0) {
//       return x;
//     }
//   });
//   return evens.reduce((x,y) => x + y) * arr.slice(-1);
// };

const evenLast = (arr) => {
  if (arr.length == 0) {
    return 0;
  } else {
    return (
      arr.filter((x, y) => y % 2 == 0).reduce((x, y) => x + y) * arr.slice(-1)
    );
  }
};

console.log(evenLast([2, 3, 4, 5])); // 30
