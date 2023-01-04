// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.

// parameters array
// returns string
// examples
// pseudo code given an array of objects find the object whose language is equal to python, if the length of the array is zero return there are no developers otherwise access the first element of the array and return the firstname and country

// var list1 = [
//   {
//     firstName: "Mark",
//     lastName: "G.",
//     country: "Scotland",
//     continent: "Europe",
//     age: 22,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Victoria",
//     lastName: "T.",
//     country: "Puerto Rico",
//     continent: "Americas",
//     age: 30,
//     language: "Python",
//   },
//   {
//     firstName: "Emma",
//     lastName: "B.",
//     country: "Norway",
//     continent: "Europe",
//     age: 19,
//     language: "Clojure",
//   },
// ];

// var list2 = [
//   {
//     firstName: "Kseniya",
//     lastName: "T.",
//     country: "Belarus",
//     continent: "Europe",
//     age: 29,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Amar",
//     lastName: "V.",
//     country: "Bosnia and Herzegovina",
//     continent: "Europe",
//     age: 32,
//     language: "Ruby",
//   },
// ];

const getFirstPython = (arr) => {
  let pythonDevs = arr.filter((x) => x.language == "Python");
  if (pythonDevs.length == 0) {
    return "There will be no Python developers";
  } else {
    return `${pythonDevs[0].firstName}, ${pythonDevs[0].country}`;
  }
};

// console.log(getFirstPython(list1)); // 'Victoria, Puerto Rico'
// console.log(getFirstPython(list2)); // 'There will be no Python developers'

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// parameters array
// returns object
// examples
// pseudo code given an array loop through each index and see if the language is in the empty object yet if not make it equal to 0 otherwise add 1

let list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

let countLanguages = (arr) => {
  var count = {};
  arr.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
  return count;
};

console.log(countLanguages(list1)); // { C: 2, JavaScript: 1, Ruby: 1 }
