// Change two-dimensional array

// Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

// (You can mutate the input if you want, but it is a better practice to not mutate the input)

// Example:

// Input array

// [
//   [-1,  4, -5, -9,  3 ],
//   [ 6, -4, -7,  4, -5 ],
//   [ 3,  5,  0, -9, -1 ],
//   [ 1,  5, -7, -8, -9 ],
//   [-3,  2,  1, -5,  6 ]
// ]
// Output array

// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]

// parameters array
// returns array
// examples
// pseudo code given an array of arrays go through it with a for loop accessing the same element in the in both arrays and see if it is negative or not then return the original array

const matrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    Math.sign(arr[i][i]) == -1 ? (arr[i][i] = 0) : (arr[i][i] = 1);
  }
  return arr;
};
// console.log(
//   matrix([
//     [-1, 4, -5, -9, 3],
//     [6, -4, -7, 4, -5],
//     [3, 5, 4, -9, -1],
//     [1, 5, -7, -8, -9],
//     [-3, 2, 1, -5, 6],
//   ])
// ); // [[0, 4, -5, -9, 3], [6, 0, -7, 4, -5], [3, 5, 1, -9, -1], [1, 5, -7, 0, -9], [-3, 2, 1, -5, 1]]

// console.log(
//   matrix([
//     [-1, 4, -5, -9, 3],
//     [6, 8, -7, 4, -5],
//     [3, 5, 1, -9, -1],
//     [1, 5, -7, 15, -9],
//     [-3, 2, 1, -5, -6],
//   ])
// ); // [[0, 4, -5, -9, 3],[6, 1, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 1, -9],[-3, 2, 1, -5, 0]]

// console.log(
//   matrix([
//     [-1, 4, -5, -9, 3, 8],
//     [6, 8, -7, 4, -5, -1],
//     [3, 5, 1, -9, -1, 6],
//     [1, 5, -7, 15, -9, 3],
//     [-3, 2, 1, -5, -6, 0],
//     [8, 2, 0, -2, 4, -5],
//   ])
// ); // [[0, 4, -5, -9, 3, 8],[6, 1, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 1, -9, 3],[-3, 2, 1, -5, 0, 0],[8, 2, 0, -2, 4, 0]]

// console.log(
//   matrix([
//     [1, 1, -5, 5],
//     [2, -4, 11, 2],
//     [3, 1, -1, 4],
//     [2, -6, 8, 10],
//   ])
// ); // [[1, 1, -5, 5],[2, 0, 11, 2],[3, 1, 0, 4],[2, -6, 8, 1]]

// parameters array
// returns array
// examples
// pseudo code check to see if the array is empty if it is not use a for loop to loop through the numbers startering at index 0 and the last index, if the number is not in the array push it to an empty variable and return the variable that we created to hold numbers not in the array

const findMissingNumbers = (arr) => {
  let starter = [];
  if (arr.length === 0) {
    return [];
  } else {
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
      if (!arr.includes(i)) {
        starter.push(i);
      }
    }
    return starter;
  }
};

// console.log(findMissingNumbers([-3, -2, 1, 4])); // [-1,0,2,3]
// console.log(findMissingNumbers([-1,0,1,2,3,4])); // []
// console.log(findMissingNumbers([])); // []
