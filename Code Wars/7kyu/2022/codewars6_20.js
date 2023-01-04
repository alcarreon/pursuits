// Minimize Sum Of Array (Array Series #1)

// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

// parameters array
// returns number
// examples
// pseudo code sort the array in ascending order and then find half the length, and create an empty array that the products will go into, then go from the start to the middle of the array and multiply it by the elements after middle of the array

const minSum = (arr) => {
  let sortedArr = arr.sort((x, y) => x - y);
  let arrLength = arr.length / 2 - 1;
  let starter = [];
  for (let i = 0; i <= arrLength; i++) {
    starter.push(sortedArr[i] * sortedArr[sortedArr.length - 1 - i]);
  }
  return starter.reduce((x, y) => x + y);
};

console.log(minSum([5, 4, 2, 3])); // 22
console.log(minSum([12, 6, 10, 26, 3, 24])); // 342
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); // 74
