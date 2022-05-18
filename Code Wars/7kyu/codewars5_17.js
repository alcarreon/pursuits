// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// parameters two arrays the first is the answer sheet, the second is student answers
// returns  the score the student got on the test
// examples
// pseudo code  create an empty variable that will hold the students test result then for each element in the first array check the same index in the second, if the elements are equal to each other add 4 points to the students test result, if they are not equal subtract one from the test results, and if the answer is an empty string add 0 to the test result, if the test result is negative return 0, otherwise return the test result

const checkExam = (arr1, arr2) => {
  let counter = 0;
  arr1.map((x, y) => {
    if (x == arr2[y]) {
      counter += 4;
    } else if (arr2[y] == "") {
      counter += 0;
    } else if (x != arr2[y]) {
      counter -= 1;
    }
  });
  if (counter <= 0) {
    return 0;
  } else {
    return counter;
  }
};

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// parameters array of numbers
// returns array of even numbers
// examples
// psuedo code given an array of number filter through the array adding numbers that are even to a new array

const getEvenNumbers = (arr) => arr.filter((x) => x % 2 == 0);

// console.log(getEvenNumbers([1,2,3,6,8,10])); // [2,6,7,10]
// console.log(getEvenNumbers([1,2])); // [2]
// console.log(getEvenNumbers([12,14,15])); // [12, 14]
// console.log(getEvenNumbers([13,15])); // []
// console.log(getEvenNumbers([1,3,9])); // []

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// parameters array
// returns array with the last occurance of a number without duplicates
// examples
// pseudo code given an array reverse it and remove duplicates using set, in order to find the last occurance of a number reverse that array

const solve = (arr) => {
  return [...new Set(arr.reverse())].reverse();
};

// console.log(solve([3, 4, 4, 3, 6, 3])); // [4,6,3]
// console.log(solve([1, 2, 1, 2, 1, 2, 3])); // [1,2,3]
// console.log(solve([1, 2, 3, 4])); // [1,2,3,4]
// console.log(solve([1, 1, 4, 5, 1, 2, 1])); // [4,5,2,1]
// console.log(solve([1, 2, 1, 2, 1, 1, 3])); // [2,1,3]

// Thinkful - String Drills: Repeater
// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

// parameters string and a number
// return a string repeated number of times
// examples
// pseudo code given a str loop through num times adding str to an empty variable

const repeater = (str, num) => {
  let repeater = "";
  for (let i = 1; i <= num; i++) {
    repeater += str;
  }
  return repeater;
};

// console.log(repeater("a", 5)); // 'aaaaa'
// console.log(repeater("Na", 16)); // 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa'
// console.log(repeater("Wub ", 6)); // 'Wub Wub Wub Wub Wub Wub '

// Remove duplicate words
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// parameters string
// returns string with duplicates removed
// examples
// pseudo code given a string split it into an array take the array and remove duplicates then join the array back into a string

const removeDuplicateWords = (str) => {
  let arrStr = str.split(" ");
  return [...new Set(arrStr)].join(" ");
};

// console.log(
//   removeDuplicateWords(
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//   )
// ); // 'alpha beta gamma delta'

// Largest pair sum in array
// Given a sequence of numbers, find the largest pair sum in the sequence.

// parameters array
// returns number of largest values added together
// example
// psuedo code given an array sort it into descending order access the array at index 0 and index 1 and add them together

const doTest = (arr) => {
  sortedArr = arr.sort((x, y) => y - x);
  return sortedArr[0] + sortedArr[1];
};

// console.log(doTest([10,14,2,23,19])); // 42
// console.log(doTest([-100,-29,-24,-19,19])); // 0
// console.log(doTest([1,2,3,4,6,-1,2])); // 10
// console.log(doTest([-10, -8, -16, -18, -19])); // -18

// Predict your age!
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

// parameters ages
// return number
// examples
// pseduo code multiply each number by itself then add them together then take the square root of the product and divide that by 2

const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
  let mAge1 = age1 * age1;
  let mAge2 = age2 * age2;
  let mAge3 = age3 * age3;
  let mAge4 = age4 * age4;
  let mAge5 = age5 * age5;
  let mAge6 = age6 * age6;
  let mAge7 = age7 * age7;
  let mAge8 = age8 * age8;
  let total =
    Math.sqrt(mAge1 + mAge2 + mAge3 + mAge4 + mAge5 + mAge6 + mAge7 + mAge8) /
    2;
  return Math.floor(total);
};

// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); // 86

// Sorted? yes? no? how?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

const isSortedAndHow = (arr) => {
  let ascending = [...arr].sort((x, y) => x - y);
  let descending = [...arr].sort((x, y) => y - x);
  //   console.log(arr);

  let whichOne = arr.map((el, indx) => {
    if (el == ascending[indx]) {
      return "ascending";
    } else if (el == descending[indx]) {
      return "descending";
    } else {
      return "no";
    }
  });
  console.log(whichOne);
  //   console.log([...new Set(whichOne)]);
  let results = [...new Set(whichOne)];
  if (results.length == 1 && results[0] == "ascending") {
    return "yes, ascending";
  } else if (results.length == 1 && results[0] == "descending") {
    return "yes, descending";
  } else {
    return "no";
  }
};

console.log(isSortedAndHow([1, 2])); // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); // 'no'
