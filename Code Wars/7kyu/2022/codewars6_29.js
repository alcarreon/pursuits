// Stanton measure
// The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// parameters array
// returns number
// examples
// pseudo code given an array find the number of times that 1 appears using filter and find the length of that array and store it into a variable, then using the previous variable filter the array for it and find the length of that array and return

const stantonMeasure = (arr) => {
  let oneCount = arr.filter((x) => x == 1).length;
  let measure = arr.filter((x) => x == oneCount).length;
  return measure;
};

// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // 3

// Find Duplicates
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// parameters array
// returns array
// examples
// pseudo code given an array use filter, given the current element's index use indexOf to see if the current index is different than that of indexOf which tells us that it is a duplicate

const duplicates = (arr) =>
  arr.filter((v, i) => arr.indexOf(v) !== i && arr.lastIndexOf(v) === i);
