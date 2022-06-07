// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

var list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

var list2 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
];

// parameters array of objects
// returns boolean
// examples
// pseudo code given an array of objects go through them accessing the language attribute and compare it to Ruby if the length of the filtered array is greater than 1 return true otherwise return false

const isRubyComing = (arr) =>
  arr.filter((x) => x.language == "Ruby").length >= 1 ? true : false;

// console.log(isRubyComing(list1)); // true
// console.log(isRubyComing(list2)); // false

// Add property to every object in array
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

// parameters array of objects
// returns array of objects
// examples
// pseudo code given an array of objects use dot notation to create the attribute usersAnswer and set the value of it equal to null

questions.map((x) => (x.usersAnswer = null));
console.log(questions);
