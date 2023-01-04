// Simple Fun : Reverse Letter
// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// parameters string
// returns string
// examples
// pseudo code given a string split it by each character, then check to see if the element is a string by using the expression .toLowerCase() != .toUpperCase() then reverse the array and join it back into a string

const reverseLetter = (str) =>
  str
    .split("")
    .filter((x) => x.toLowerCase() != x.toUpperCase())
    .reverse()
    .join("");

// console.log(reverseLetter("krishan")); // "nahsirk"
// console.log(reverseLetter("ultr53o?n")); // "nortlu"
// console.log(reverseLetter("ab23c")); // "cba"
// console.log(reverseLetter("krish21an")); // "nahsirk"

// Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// parameters string
// returns array of indexes
// examples
// psuedo code define an array of vowels, then sanitize it by making the entire string lowercase and split the string by each character into an array go through the array and check if the element is a vowel if it is then add the index to the array, finally filter through the array removing all the undefined elements

const vowelIndices = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  lowerStr = str.toLowerCase().split("");
  return lowerStr
    .map((x, y) => {
      if (vowels.includes(x)) {
        return y + 1;
      }
    })
    .filter((x) => x != undefined);
};

// console.log(vowelIndices("mmm")); // []
// console.log(vowelIndices("apple")); // [1,5]
// console.log(vowelIndices("super")); // [2,4]
// console.log(vowelIndices("orange")); // [1,3,6]
// console.log(vowelIndices("supercalifragilisticexpialidocious")); // [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]

// Maximum Product
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// parameters array
// returns number
// examples
// pseudo code given an array of numbers remove the last element then go through the array checking the first element with the element proceeding using the Math.max to get the highest result

const adjacentElementsProduct = (inputArray) =>
  Math.max(
    ...inputArray.slice(0, -1).map((n, index) => n * inputArray[index + 1])
  );

// console.log(adjacentElementsProduct([5, 8])); // 40
// console.log(adjacentElementsProduct([1, 2, 3])); // 6
// console.log(adjacentElementsProduct([1, 5, 10, 9])); // 90
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
// console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50

const testy = [0, 1, 2, 3, 4, 5];
console.log(testy.slice(0, -1));
