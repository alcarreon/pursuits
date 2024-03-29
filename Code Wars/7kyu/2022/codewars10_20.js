// Sum of array singles

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// parameters array
// return number
// examples
// pseudo code given an array create a object with the count of each element, transform the object into an array and only get the elements that occur once and reduce that array to get the result

const repeats = (arr) => {
  const counted = arr.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  const countedArr = Object.entries(counted)
    .filter((x) => x[1] == 1)
    .reduce((x, y) => +x[0] + +y[0]);

  return countedArr;
};

// console.log(repeats([4, 5, 7, 5, 4, 8])); // 15

// console.log(repeats([9, 10, 19, 13, 19, 13])); // 19

// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12

// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22

// console.log(repeats([5, 10, 19, 13, 10, 13])); // 24
