// Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
//   { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//   { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
// ];
// Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

// [
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//   { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
//   { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//   { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
// ];
// Notes:

// The input array will always be valid and formatted as in the example above.
// The array does not include developers coding in the same language and sharing the same name.

// parameters array of objects
// returns array of objects
// examples
// pseudo code given an array of objects use sort to iterate through the array, access the language property for each element and compare it to the next using localecompare order to sort the array, if the languages are the same use localecompare to sort the first names

const list1 = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Precious",
    lastName: "G.",
    country: "South Africa",
    continent: "Africa",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 30,
    language: "C",
  },
  {
    firstName: "Agustin",
    lastName: "V.",
    country: "Uruguay",
    continent: "Americas",
    age: 19,
    language: "JavaScript",
  },
];

const list2 = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 30,
    language: "C",
  },
  {
    firstName: "Agustin",
    lastName: "V.",
    country: "Uruguay",
    continent: "Americas",
    age: 19,
    language: "JavaScript",
  },
];

const sortByLanguage = (arr) =>
  arr.sort((x, y) =>
    x.language.localeCompare(y.language) == 0
      ? x.firstName.localeCompare(y.firstName)
      : x.language.localeCompare(y.language)
  );

console.log(sortByLanguage(list1));
// [
//     { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//     { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
//     { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//     { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
//   ]

// console.log(sortByLanguage(list2));
//   [
//     { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//     { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
//     { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
//   ]
