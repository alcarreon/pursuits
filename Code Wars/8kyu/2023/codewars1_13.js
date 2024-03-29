// Lario and Muigi Pipe Problem

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// parameters array
// return array
// examples
// pseudo code given an array create variables to hold the min and max values of the array and a variable to hold an empty array, use a for loop to push each iteration of the number to the array

function pipeFix(arr) {
  let result = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); // [1,2,3,4,5,6,7,8,9]

console.log(pipeFix([1, 2, 3, 12])); // [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(pipeFix([1, 5])); // [ 1, 2, 3, 4, 5 ]
