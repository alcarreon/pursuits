// Max sum between two negatives

// Task
// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, C++, JavaScript, Java, CoffeeScript and COBOL, Nothing for Haskell, None for Rust.

// Example 1
// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

// Example 2
// [4, -1, -2] -> 0
//      ^   ^
// There is nothing between -1 and -2, so return 0.

// parameters array
// return integer
// examples
// pseudo code create an empty array to hold the indexes of negative integers, check to see if the length of the negative array is less than two otherwise slice the elements between the negative numbers and reduce the array and return the largest number

function maxSumBetweenTwoNegatives(arr) {
  let negArr = [];
  let holder = [];
  arr.map((x, y) => {
    if (x < 0) {
      negArr.push(y);
    }
  });
  if (negArr.length < 2) {
    return -1;
  } else {
    for (let i = 0; i < negArr.length - 1; i++) {
      holder.push(
        arr.slice(negArr[i] + 1, negArr[i + 1]).reduce((x, y) => x + y, 0)
      );
    }
  }
  return Math.max(...holder);
}

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7])); // 8

console.log(maxSumBetweenTwoNegatives([5, -1, -2])); // 0

console.log(maxSumBetweenTwoNegatives([1, -2])); // -1
