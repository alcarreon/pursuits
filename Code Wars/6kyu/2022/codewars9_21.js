// Elimination Tournament

// In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

// During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

// At the end of the competition, return the results of all the rounds in the form of array of arrays.

// Example:
// input = [9, 5, 4, 7, 6, 3, 8, 2];

// output = [
//   [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
//   [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2
//   [9, 8],                    // results of 9 vs 7 and 6 vs 8
//   [9]                        // results of 9 vs 8
// ];
// Notes:

// Array length will alway be >= 2 and <= 100
// Elements of the array will always be >=1 and <= 100
// Input must not be altered.

// parameters array
// return array
// examples
// pseudo code given an array check the length to see if it is equal to 1 if it is return the original array, then check to see if the array is even if it is get the last element from the array otherwise return [] then use a loop to iterate through the array for each round and check elements next to each other use recurssion to continue to run the function until there is only one element left

const input1 = [9, 5, 4, 7, 6, 3, 8, 2];
const input2 = [9, 5, 4, 7, 6, 3, 8];

const tourney = (arr) => {
  if (arr.length === 1) return [arr];

  let next = arr.length % 2 ? arr.slice(-1) : [];

  for (let i = 0; i < arr.length - 1; i += 2)
    next.push(Math.max(arr[i], arr[i + 1]));

  return [arr].concat(tourney(next));
};

console.log(tourney(input1)); // [
//     [9, 5, 4, 7, 6, 3, 8, 2],
//     [9, 7, 6, 8],
//     [9, 8],
//     [9]
//   ];

// console.log(tourney(input2)); // [
//     [9, 5, 4, 7, 6, 3, 8],
//     [8, 9, 7, 6],
//     [9, 7],
//     [9]
//   ];
