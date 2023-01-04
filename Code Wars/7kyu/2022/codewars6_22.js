// Odd-Even String Sort
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces

// parameters string
// returns string
// examples
// pseudo code given a string split it into an array, then use filter to get every even index into an array aand then join it back into a string, and use filter to get every odd index of an array and join it back into a string then use template literal to combine the two arrays

const sortMyString = (str) => {
  strArr = str.split("");
  evenStr = strArr.filter((x, y) => y % 2 == 0).join("");
  oddStr = strArr.filter((x, y) => y % 2 == 1).join("");
  return `${evenStr} ${oddStr}`;
};

// console.log(sortMyString("CodeWars")); // "CdWr oeas"
// console.log(sortMyString("YCOLUE'VREER")); // "YOU'RE CLEVER"

// Cat and Mouse - Easy Version
// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

const catMouse = (str) =>
  str.indexOf("m") - str.indexOf("C") <= 4 ? "Caught!" : "Escaped!";

console.log(catMouse("C....m")); // "Escaped!"
console.log(catMouse("C..m")); // "Caught!"
console.log(catMouse("C.....m")); // "Escaped!"
