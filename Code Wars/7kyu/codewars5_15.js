// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// parameters array of numbers
// returns array of even numbers
// examples
// psuedo code iterate through the array if the element is even add it to another list, return the list of only even numbers

const noOdds = (arr) => arr.filter((x) => x % 2 == 0);

// console.log(noOdds([0, 1])); // [0]
// console.log(noOdds([0, 1, 2, 3])); // [0,2]

const s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

const mxdiflg = (arr1, arr2) => {
  if (arr1.length == 0 || arr2.length == 0) {
    return -1;
  } else {
    let sortedArr1 = arr1.map((x) => x.length).sort((x, y) => x - y);
    let sortedArr2 = arr2.map((x) => x.length).sort((x, y) => x - y);
    if (
      Math.abs(sortedArr1[0] - sortedArr2[sortedArr2.length - 1]) <=
      Math.abs(sortedArr1[sortedArr1.length - 1] - sortedArr2[0])
    ) {
      return Math.abs(sortedArr1[sortedArr1.length - 1] - sortedArr2[0]);
    } else {
      return Math.abs(sortedArr1[0] - sortedArr2[sortedArr2.length - 1]);
    }
  }
};

console.log(mxdiflg(s1, s2)); // 13
