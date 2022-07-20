// Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

// parameters array
// returns array
// examples
// pseudo code create two empty arrays one for odd and one for even numbers, map through the original array use floor to round the numbers down and then checking to see if they are even or odd depending on which the number is push it to the corresponding array, sort both arrays odd in ascending, even in descending and concatenate them together

const sortItOut = (arr) => {
  let oddIndex = [];
  let evenIndex = [];
  arr.map((x) => {
    if (Math.floor(x) % 2 == 1) {
      oddIndex.push(x);
    } else {
      evenIndex.push(x);
    }
  });
  oddIndex.sort((x, y) => x - y);
  evenIndex.sort((x, y) => y - x);
  return oddIndex.concat(evenIndex);
};

console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78])); // [11,33,55,55,90.4,78,44,22,4]
// console.log(sortItOut([26, 243, 52, 2, 432414, 1, 11, 46, 32])); // [1,11,243,432414,52,46,32,26,2]
// console.log(sortItOut([19, 65, 88, 112, 60, 14, 33, 49, 88])); // [19,33,49,65,112,88,88,60,14]
// console.log([]); // []
// console.log(sortItOut([68, 25, 99, 50, 10, 67, 2, 5, 8, 34, 67])); // [5,25,67,67,99,68,50,34,10,8,2]
