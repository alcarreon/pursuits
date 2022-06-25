// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// parameters array of objects
// returns boolean
// examples
// pseudo code given an array map through each object and get the language property from each adding them to a new array, create a new set using the given array only containing lanaguages and if the array length is equal to 1 then all of the languages for each object are the same

// let list1 = [
//   {
//     firstName: "Daniel",
//     lastName: "J.",
//     country: "Aruba",
//     continent: "Americas",
//     age: 42,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Kseniya",
//     lastName: "T.",
//     country: "Belarus",
//     continent: "Europe",
//     age: 22,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Hanna",
//     lastName: "L.",
//     country: "Hungary",
//     continent: "Europe",
//     age: 65,
//     language: "JavaScript",
//   },
// ];

// let list2 = [
//   {
//     firstName: "Mariami",
//     lastName: "G.",
//     country: "Georgia",
//     continent: "Europe",
//     age: 29,
//     language: "Python",
//   },
//   {
//     firstName: "Mia",
//     lastName: "H.",
//     country: "Germany",
//     continent: "Europe",
//     age: 39,
//     language: "Ruby",
//   },
//   {
//     firstName: "Maria",
//     lastName: "I.",
//     country: "Greece",
//     continent: "Europe",
//     age: 32,
//     language: "C",
//   },
// ];

const isSameLanguage = (arr) =>
  [...new Set(arr.map((x) => x.language))].length == 1;

// console.log(isSameLanguage(list1)); // true
// console.log(isSameLanguage(list2)); // false

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// parameters array of objects
// returns array of objects
// examples
// pseudo code given an array of objects sort them based on their age, then take the age from the first element of the sorted array and make a new array of objects that match that age then return that array

let list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

let list2 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
];

let list3 = [
  {
    firstName: "Alexander",
    lastName: "F.",
    country: "Russia",
    continent: "Europe",
    age: 89,
    language: "Java",
  },
  {
    firstName: "Fatima",
    lastName: "K.",
    country: "Saudi Arabia",
    continent: "Asia",
    age: 21,
    language: "Clojure",
  },
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Nikola",
    lastName: "H.",
    country: "Serbia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Jakub",
    lastName: "I.",
    country: "Slovakia",
    continent: "Europe",
    age: 28,
    language: "Java",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 89,
    language: "JavaScript",
  },
  {
    firstName: "Luka",
    lastName: "J.",
    country: "Slovenia",
    continent: "Europe",
    age: 29,
    language: "Clojure",
  },
  {
    firstName: "Mariam",
    lastName: "B.",
    country: "Egypt",
    continent: "Africa",
    age: 89,
    language: "Python",
  },
];

const findSenior = (arr) => {
  let sortedArr = arr.sort((x, y) => y.age - x.age);
  let highestAge = sortedArr[0].age;
  let seniors = sortedArr.filter((x) => x.age == highestAge);
  return seniors;
};

console.log(findSenior(list1)); // [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
//   ]
console.log(findSenior(list2)); // [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   ]
console.log(findSenior(list3)); // [
//     { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' },
//     { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
//   ]
