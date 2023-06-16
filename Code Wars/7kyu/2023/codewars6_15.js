// x' marks the spot.

// Task:
// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Examples
// Input: []
// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]
// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]
// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]
// Return [0,0] when x at top left => [0, 0]

// Input: [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// Return [4,6] for the example above => [4, 6]

// parameters array
// return array
// examples
// pseudo code create a variable to hold an empty array, then iterate over the given array using for each, iterate over each element which is an array again and check to see if the element of the nested array is equal to x if it is push the coordinates to the empty array, then check to see that the size of the once empty array is equal to 0 if it is return the first element otherwise return an empty array

function xMarksTheSpot(arr) {
  let holder = [];

  arr.forEach((x, y) => {
    x.forEach((a, b) => {
      if (a == "x") {
        holder.push([y, b]);
      }
    });
  });

  return holder.length == 1 ? holder[0] : [];
}

console.log(xMarksTheSpot([])); // []

console.log(
  xMarksTheSpot([
    ["o", "o"],
    ["o", "o"],
  ])
); // []

console.log(
  xMarksTheSpot([
    ["x", "o"],
    ["o", "x"],
  ])
); // []

console.log(
  xMarksTheSpot([
    ["x", "o"],
    ["o", "o"],
  ])
); // [0, 0]

console.log(
  xMarksTheSpot([
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "x", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
  ])
); // [4, 6]
