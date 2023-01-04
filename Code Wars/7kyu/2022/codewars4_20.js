// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
let highAndLow = (str) => {
  let arr = str.split(" ");
  return `${Math.max(...arr).toString()} ${Math.min(...arr).toString()}`;
};
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

let getMiddle = (str) => {
  if (str.length % 2 == 0) {
    let middle = str.length / 2 - 1;
    return str.slice(middle, -middle);
  } else if (str.length == 1) {
    return str;
  } else if (str.length % 2 == 1) {
    let middle = str.length / 2;
    return str.slice(middle, -middle);
  }
};

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
// console.log(getMiddle("test")); //"es"
// console.log(getMiddle("testing")); // "t"
// console.log(getMiddle("middle")); // "dd"
// console.log(getMiddle("A")); // "A"

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
let isSquare = (n) => Number.isInteger(Math.sqrt(n));
// console.log(isSquare(-1)); // false
// console.log(isSquare(0)); // true
// console.log(isSquare(3)); // false
// console.log(isSquare(4)); // true
// console.log(isSquare(25)); // true
// console.log(isSquare(26)); // false

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

let filter_list = (arr) =>
  arr.filter(
    (x) => Number.isInteger(x) && (Math.sign(x) == 1 || Math.sign(x) == 0)
  );
// console.log(filter_list([1, 2, "a", "b"])); // [1,2]
// console.log(filter_list([1, "a", "b", 0, 15])); //  [1,0,15]
// console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // [1,2,123]

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// p0 = starting population
// percent = percentage that the population increases per year
//  aug = number of new people added per year
// p = population that is greater than or equal to

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}
// console.log(nbYear(1000, 2, 50, 1200)); // 3
// console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
// console.log('hi');
