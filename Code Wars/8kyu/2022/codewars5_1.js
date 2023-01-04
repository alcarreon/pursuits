// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

let getAverage = (arr) => Math.floor(arr.reduce((x, y) => x + y) / arr.length);
// console.log(getAverage([2, 2, 2, 2])); // 2
// console.log(getAverage([1, 2, 3, 4, 5])); // 3
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

let countBy = (num1, num2) => {
  let totalCount = [];
  let start = 0;
  for (i = 1; i <= num2; i++) {
    start += num1;
    totalCount.push(start);
  }
  return totalCount;
};

// console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2, 5)); // [2,4,6,8,10]

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// given array check each element of the array to see if it is 1 less than the number after it

let firstNonConsecutive = (arr) => {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
};

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // false
console.log(firstNonConsecutive([1, 2, 3, 4]));
