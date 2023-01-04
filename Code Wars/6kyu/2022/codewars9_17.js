// Multiplication table
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// parameters number
// return array
// examples
// pseudo code create an empty variable to hold the result, use two for loops the first one to iterate through to the user provided number, the second one to create the times table, where the second for loop pushes the product of the times table to the variable holding the final answer

const multiplicationTable = (num) => {
  let holder = [];
  for (let i = 1; i <= num; i++) {
    let nums = [];
    for (let j = 1; j <= num; j++) {
      nums.push(j * i);
    }
    holder.push(nums);
  }
  return holder;
};
console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]
