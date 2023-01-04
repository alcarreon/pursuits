// Largest Elements

// Write a program that outputs the top n elements from a list.

// parameters number and array
// returns array
// examples
// pseudo code given an array sort it in ascending order using sort then select the negative value of num in order to get the ending portion of the array required

const largest = (num, arr) => {
  let sortedArr = arr.sort((x, y) => x - y);
  return num == 0 ? [] : sortedArr.slice(-num);
};

// console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [9,10]
// console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])); // [5,5,5]
// console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])); // [3, 5, 9, 13, 22, 50, 63]
// console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5])); // []

// Spacify
// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// parameters string
// returns string
// exampls
// pseudo code given a string split it by each character, then join it back together including an extra space using join
const spacify = (str) => str.split("").join(" ");

console.log(spacify("hello world")); // 'h e l l o   w o r l d'
console.log(spacify("12345")); // '1 2 3 4 5'
