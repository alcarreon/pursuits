// Adding values of arrays in a shifted way

// #Adding values of arrays in a shifted way

// You have to write a method, that gets two parameter:

// 1. An array of arrays with int-numbers
// 2. The shifting value
// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.

// #1. Example:

// [[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

// 1,2,3,4,5,6
// 7,7,7,7,7,-7

// --> [8,9,10,11,12,-1]
// #2. Example

// [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

// 1,2,3,4,5,6
//       7,7,7,7,7,7

// --> [1,2,3,11,12,13,7,7,7]
// #3. Example

// [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3

// 1,2,3,4,5,6
//       7,7,7,-7,7,7
//             1,1,1,1,1,1

// --> [1,2,3,11,12,13,-6,8,8,1,1,1]
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

// parameters array, integer
// return array
// examples
// pseudo code create an empty variable to hold the count of how many times the array has been iterated, and a second variable to hold an empty array, iterate through the array of arrays using a for loop and then iterate over each element in the array updating the position of each element with the product of the element from the previous array with that of the current array

function addingShifted(arr, shift) {
  counter = 0;
  holder = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      holder[counter + j] = (holder[counter + j] || 0) + arr[i][j];
    }
    counter += shift;
  }
  return holder;
}

console.log(
  addingShifted(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 7, 7, 7, 7, -7],
    ],
    0
  )
); // [8, 9, 10, 11, 12, -1 ]

// console.log(
//   addingShifted(
//     [
//       [1, 2, 3, 4, 5, 6],
//       [7, 7, 7, 7, 7, 7],
//     ],
//     3
//   )
// ); // [ 1, 2, 3, 11, 12, 13, 7, 7, 7]

console.log(
  addingShifted(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 7, 7, -7, 7, 7],
      [1, 1, 1, 1, 1, 1],
    ],
    3
  )
); // [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1]
