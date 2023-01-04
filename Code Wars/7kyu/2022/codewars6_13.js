// Naughty or Nice?
// Happy Holidays fellow Code Warriors!
// It's almost Christmas! That means Santa's making his list, and checking it twice. Unfortunately, elves accidentally mixed the Naughty and Nice list together! Santa needs your help to save Christmas!

// Save Christmas!
// Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.

// The objects in the passed will represent people. Each object contains two properties: name and wasNice.
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty

// parameters array
// returns array
// exampls
// pseudo code given an array of object filter through the wasNice property then map through the array of objects and return their name

const getNiceNames = (arr) =>
  arr.filter((x) => x.wasNice == true).map((x) => x.name);

const getNaughtyNames = (arr) =>
  arr.filter((x) => x.wasNice == false).map((x) => x.name);
// console.log(
//   getNiceNames([
//     { name: "Warrior reading this kata", wasNice: true },
//     { name: "xDranik", wasNice: false },
//     { name: "Santa", wasNice: true },
//   ])
// ); // [ 'Warrior reading this kata', 'Santa' ]

// console.log(
//   getNaughtyNames([
//     { name: "Warrior reading this kata", wasNice: true },
//     { name: "xDranik", wasNice: false },
//     { name: "Santa", wasNice: true },
//   ])
// ); // [ 'xDranik' ]

// Return a string's even characters.
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// parameters string
// returns array
// examples
// pseudo code given a string split it by each character, then check the length to make sure that it is valid if it is valid filter the array by odd index
const evenChars = (str) =>
  str.split("").length < 2 || str.split("").length > 100
    ? "invalid string"
    : str.split("").filter((x, y) => y % 2 == 1);

console.log(evenChars("abcdefghijklm")); // ["b", "d", "f", "h", "j", "l"]
console.log(evenChars("a")); // 'invalid string'
console.log(evenChars("1234")); // ['2', '4']
