// Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// parameters array, number
// return array
// examples
// pseudo code iterate through the array of numbers using a nested for loop to check each possible solution, if the two numbers add up to the target return them inside an array

const twoSum = (num, targ) => {
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    for (let j = 0; j < num.length; j++) {
      if (num[i] + num[j] == targ && i != j) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([1, 2, 3], 4)); // [0, 2]
// console.log(twoSum([1234, 5678, 9012], 14690)); // [1, 2]
// console.log(twoSum([2, 2, 3], 4)); // [0, 1]
// console.log(twoSum([2, 3, 1], 4)); // [1, 2]
