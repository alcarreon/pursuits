// Coding Meetup #14 - Higher-Order Functions Series - Order the food

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

// const countedNames = names.reduce((allNames, name) => {
//   allNames[name] ??= 0;
//   allNames[name]++;
//   // Remember to return the object, or the next iteration
//   // will receive undefined
//   return allNames;
// }, {});

// parameters array of objects
// returns object
// examples
// pseudo code iterate through the array with reduce and check to see if there is an entry for the current element if not set it equal to 0 otherwise add one to it

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

const orderFood = (arr) =>
  arr.reduce((x, y) => {
    if (!x[y.meal]) {
      x[y.meal] = 0;
    }
    x[y.meal]++;
    return x;
  }, {});

console.log(orderFood(list1)); // { vegetarian: 2, standard: 1, vegan: 1 }
