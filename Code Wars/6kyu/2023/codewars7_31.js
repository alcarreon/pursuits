// Equal Sides Of An Array

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

// parameters array
// return integer
// examples
// pseudo code create an empty array to hold the result, iterate over the array and create a variable for the sum of the left side and another variable for the sum of the right side, check to see if the first element 0 is equal to the sum of the rest of the array if it is not then add one to the index of the left side and add 2 to the index of the right side compare and then push the index plus 1 to the holder, if the holder array is empty return -1 otherwise sort the array in ascending order and return the first element

function findEvenIndex(arr) {
  let holder = [];
  arr.map((x, y) => {
    let leftSide = arr.slice(0, y + 1).reduce((x, y) => x + y, 0);
    let rightSide = arr.slice(y + 2).reduce((x, y) => x + y, 0);
    if (
      y == 0 &&
      arr.slice(0, y).reduce((x, y) => x + y, 0) ==
        arr.slice(y + 1).reduce((x, y) => x + y, 0)
    ) {
      holder.push(y);
    } else {
      if (leftSide == rightSide) {
        holder.push(y + 1);
      }
    }
  });

  return holder.length === 0 ? -1 : holder.sort((x, y) => x - y)[0];
}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3

// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1

// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1

// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3

// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0

console.log(findEvenIndex([0, 0, 0, 0, 0])); // 0
