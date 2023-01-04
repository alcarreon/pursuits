// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// parameters string
// returns array
// examples
// pseudo code given an array create two variable one for even indexes and one for odd indexes, map through the array and check each index if the index is divisible by two, uppercase that element, otherwise it stays lowercase, do the same thing again but checking if the index is odd

const capitalize = (str) => {
  strArr = str.split("");
  let evenStr = [...strArr]
    .map((x, y) => (y % 2 == 0 ? x.toUpperCase() : x))
    .join("");
  let oddStr = [...strArr]
    .map((x, y) => (y % 2 == 1 ? x.toUpperCase() : x))
    .join("");
  return [evenStr, oddStr];
};

// console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']
// console.log(capitalize("codewars")); // ['CoDeWaRs', 'cOdEwArS']
// console.log(capitalize("abracadabra")); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
// console.log(capitalize("codewarriors")); // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']

// Gauß needs help! (Sums of a lot of numbers).
// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// parameters number
// returns number
// examples
// psuedo code given a number first create an empty variable to hold each successive addition, then check to see if the number is positive and that the number is an integer, if it is run a for loop from 0 to that integer otherwise return false

const f = (num) => {
  let start = 0;
  if (Math.sign(num) == 1 && Number.isInteger(num)) {
    for (let i = 0; i <= num; i++) {
      start += i;
    }
    return start;
  } else {
    return false;
  }
};

console.log(f(100));
