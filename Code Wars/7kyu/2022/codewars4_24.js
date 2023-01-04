// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
let removeSmallest = (numbers) => {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
};
// console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1])); // [2, 2, 2, 1]

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

let sortByLength = (arr) => {
  return arr.sort((x, y) => x.length - y.length);
};

// console.log(sortByLength(["Beg", "Life", "I", "To"])); // ["I", "To", "Beg", "Life"]
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); // ["", "Pizza", "Brains", "Moderately"]
// console.log(sortByLength(["Longer", "Longest", "Short"]));  // ["Short", "Longer", "Longest"]

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

let inAscOrder = (arr) => {
  let sortedArr = [...arr].sort((x, y) => x - y);
  return arr.every((val, index) => val === sortedArr[index]);
};

console.log(inAscOrder([1, 2, 4, 7, 19])); // true
console.log(inAscOrder([1, 2, 3, 4, 5])); // true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // false
