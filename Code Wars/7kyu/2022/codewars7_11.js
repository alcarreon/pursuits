// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// parameters array, string
// returns array
// examples
// pseudo code given an array of objects filter through it checking to see that the githubAdmin property is equal to true and that the language property is equal to the string provided

let list1 = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 22,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 49,
    language: "Ruby",
    githubAdmin: "no",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 34,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
    githubAdmin: "no",
  },
];

const findAdmin = (arr, lang) =>
  arr.filter((x) => x.githubAdmin == "yes" && x.language == lang);

// console.log(findAdmin(list1, "JavaScript")); // [
// //     { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
// //     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
// //   ];

// console.log(findAdmin(list1, "Ruby")); // []
// console.log(findAdmin(list1, "Python")); // []

// The Office II - Boredom Score
// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// parameters object
// returns string
// examples
// pseudo code create an empty variable that we will add to, given an object use its keys to check if the value is equal to one of the options if it is add that value to the empty variable already created

const boredom = (obj) => {
  let objKeys = Object.keys(obj);
  starter = 0;
  objKeys.map((x) => {
    if (obj[x] == "accounts") {
      starter += 1;
    } else if (obj[x] == "finance") {
      starter += 2;
    } else if (obj[x] == "canteen") {
      starter += 10;
    } else if (obj[x] == "regulation") {
      starter += 3;
    } else if (obj[x] == "trading") {
      starter += 6;
    } else if (obj[x] == "change") {
      starter += 6;
    } else if (obj[x] == "IS") {
      starter += 8;
    } else if (obj[x] == "retail") {
      starter += 5;
    } else if (obj[x] == "cleaning") {
      starter += 4;
    } else if (obj[x] == "pissing about") {
      starter += 25;
    }
  });
  if (starter <= 80) {
    return "kill me now";
  } else if (starter > 80 && starter < 100) {
    return "i can handle this";
  } else if (starter >= 100) {
    return "party time!!";
  }
};

console.log(
  boredom({
    tim: "change",
    jim: "accounts",
    randy: "canteen",
    sandy: "change",
    andy: "change",
    katie: "IS",
    laura: "change",
    saajid: "IS",
    alex: "trading",
    john: "accounts",
    mr: "finance",
  })
); // 'kill me now'

console.log(
  boredom({
    tim: "IS",
    jim: "finance",
    randy: "pissing about",
    sandy: "cleaning",
    andy: "cleaning",
    katie: "cleaning",
    laura: "pissing about",
    saajid: "regulation",
    alex: "regulation",
    john: "accounts",
    mr: "canteen",
  })
); // 'i can handle this'

console.log(
  boredom({
    tim: "accounts",
    jim: "accounts",
    randy: "pissing about",
    sandy: "finance",
    andy: "change",
    katie: "IS",
    laura: "IS",
    saajid: "canteen",
    alex: "pissing about",
    john: "retail",
    mr: "pissing about",
  })
); // 'party time!!'
