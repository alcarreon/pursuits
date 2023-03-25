// How many consecutive numbers are needed?

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// parameters array
// return integer
// examples
// pseudo code create a variable to hold an empty array, then use a for loop to create an array with the numbers from the min to the max of the original array, iterate over the array with all the numbers not missing and check to see that the current element is not part of the original array, return the length of the resulting array

function consecutive(arr) {
  let missing = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    missing.push(i);
  }

  return missing.filter((x, y) => arr.includes(x) == false).length;
}

console.log(consecutive([4, 8, 6])); // 2

// console.log(consecutive([1, 2, 3, 4])); // 0

// console.log(consecutive([])); // 0

// console.log(consecutive([1])); // 0
