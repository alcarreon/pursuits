// Nice Array
// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// paramters array
// returns boolean
// examples
// psuedo code given an array check to see if it is empty, otherwise filter through the array checking to see if the current element plus or minus one is in the orignal array, if the length of the filered array is the same length as the orignal array it is a nice array

const isNice = (arr) => {
  return arr.length == 0
    ? false
    : arr.length ==
        arr.filter((x) => arr.includes(x - 1) || arr.includes(x + 1)).length;
};

// console.log(isNice([2, 10, 9, 3])); // true
// console.log(isNice([3, 4, 5, 7])); // false

// The Office IV - Find a Meeting Room
// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// parameters array
// returns number or string
// examples
// pseudo code given an array check to see if the index of O is negative then return 'none available!' otherwise use indexOf to return the first instance of O

const meeting = (arr) =>
  arr.indexOf("O") == -1 ? "None available!" : arr.indexOf("O");

console.log(meeting(["X", "O", "X"])); // 1
console.log(meeting(["O", "X", "X", "X", "X"])); // 0
console.log(meeting(["X", "X", "X", "X", "X"])); // 'None available!'
