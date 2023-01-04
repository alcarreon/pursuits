// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// parameters array of objects
// returns number
// examples
// pseudo code given an array of objects use dot notation to access the continent attribute and check to see that it is equal to Europe and that their language attribute is equal to JavaScript

const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

const list2 = [
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 19,
    language: "HTML",
  },
  {
    firstName: "Lukas",
    lastName: "R.",
    country: "Austria",
    continent: "Europe",
    age: 89,
    language: "HTML",
  },
];

const countDevelopers = (arr) => {
  return arr.filter(
    (x) => x.continent == "Europe" && x.language == "JavaScript"
  ).length;
};

// console.log(countDevelopers(list1)); // 1
// console.log(countDevelopers(list2)); // 0

// Write a function that takes an array and counts the number of each unique element present.

// parameters array
// returns object
// examples
// pseudo code given an array use reduce to find the number of occurences in the array, start by looking to see if the next value is in the previous value if it is add 1 to it otherwise set the initial value equal to 0

const count = (arr) => {
  return arr.reduce(function (x, y) {
    if (y in x) {
      x[y]++;
    } else {
      x[y] = 1;
    }
    return x;
  }, {});
};

console.log(count(["a", "a", "b", "b", "b"])); // { 'a': 2, 'b': 3 }
