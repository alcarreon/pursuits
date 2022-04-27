// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// let invert = arr => arr.map(x => {
//     if(Math.sign(x) == 1 || Math.sign(x) == 0){
//         return -x
//     } else {
//         return Math.abs(x)
//     }
// })

let invert = (arr) =>
  arr.map((x) => (Math.sign(x) == 1 || Math.sign(x) == 0 ? -x : Math.abs(x)));
console.log(invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []
console.log(invert([0])); // 0

// Build a function that returns an array of integers from n to 1 where n>0.

let reverseSeq = (num) => {
  let numArr = [];
  for (num; num > 0; num--) {
    numArr.push(num);
  }
  return numArr;
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
