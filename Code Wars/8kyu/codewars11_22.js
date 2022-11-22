// CSV representation of array

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// parameters array
// return string
// examples
// pseudo code create an empty string to hold the result, iterate over the array and check to see that the element is not the last one add \n to the end of each element until you get to the last

function toCsvText(arr) {
  let result = "";
  arr.forEach((x, y) => {
    if (y != arr.length - 1) {
      result += `${x}\n`;
    } else {
      result += x;
    }
  });
  return result;
}

// console.log(
//   toCsvText([
//     [0, 1, 2, 3, 45],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34],
//   ])
// ); // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'

// console.log(
//   toCsvText([
//     [-25, 21, 2, -33, 48],
//     [30, 31, -32, 33, -34],
//   ])
// ); // '-25,21,2,-33,48\n30,31,-32,33,-34'

// console.log(
//   toCsvText([
//     [5, 55, 5, 5, 55],
//     [6, 6, 66, 23, 24],
//     [666, 31, 66, 33, 7],
//   ])
// ); // '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7'
