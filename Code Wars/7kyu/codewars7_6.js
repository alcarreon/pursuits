// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

// parameters array of objects
// returns number
// examples
// pseudo code given an array of objects get the age from each using map then reduce the array and divide it by the length of the array to find the average

let list1 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

let list2 = [
  {
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 20,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 21,
    language: "C",
  },
];

const getAverageAge = (arr) =>
  Math.round(arr.map((x) => x.age).reduce((x, y) => x + y, 0) / arr.length);

// console.log(getAverageAge(list1)); // 50
// console.log(getAverageAge(list2)); // 21

// Return String of First Characters
// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

// parameters string
// returns string
// examples
// pseudo code create an empty variable, then given a string split it by spaces, then map through the array taking the first element of the string and adding it to the empty variable

const makeString = (str) => {
  let starter = "";
  str.split(" ").map((x) => (starter += x[0]));
  return starter;
};

console.log(makeString("sees eyes xray yoat")); // 'sexy'
// console.log(makeString("brown eyes are nice")); // 'bean'
// console.log(makeString("cars are very nice")); // "cavn"
// console.log(makeString("kaks de gan has a big head")); // "kdghabh"
