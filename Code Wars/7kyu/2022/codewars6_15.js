// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// parameters array of objects
// returns array of objects
// examples
// pseudo code given an array of objects loop through them using map to add a new property to each object using firstName and language

const list1 = [
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

const greetDevelopers = (arr) => {
  arr.map(
    (x) =>
      (x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
  );
  return arr;
};

// console.log(greetDevelopers(list1)); //
// {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?',
//   },
//   {
//     firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?',
//   },
//   {
//     firstName: 'Madison',
//     lastName: 'U.',
//     country: 'United States',
//     continent: 'Americas',
//     age: 32,
//     language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?',
//   },

// By 3, or not by 3? That is the question . . .

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// parameters string
// returns boolean
// examples
// pseudo code given a string split it by each character, then convert each element into a string using + and reduce the array to get the total of the numbers in the array finally check to see if 3 modulus the array total is 0

const divisibleByThree = (str) =>
  str.split("").reduce((x, y) => +x + +y) % 3 == 0;

console.log(divisibleByThree("123")); // true
console.log(divisibleByThree("19254")); // true
console.log(divisibleByThree("88")); // false
console.log(divisibleByThree("1")); // false
