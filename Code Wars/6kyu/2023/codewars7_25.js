// Which are in?

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// parameters two arrays
// return array
// examples
// pseudo code create an empty varaible to hold the result as an array, iterate over the first array where you counted if the element could split up another element on the second array, you then got the length of the number of elements that were split and if it has been split push the name to the holder array, sort the array and return it

function inArray(splitterArr, totalArr) {
  let holder = [];
  for (let i = 0; i < splitterArr.length; i++) {
    let count = totalArr
      .map((x) => x.split(splitterArr[i]))
      .filter((x) => x.length > 1).length;
    if (count > 0) {
      holder.push(splitterArr[i]);
    }
  }

  return holder.sort();
}

a0 = ["ect", "pini", "ou", "he", "wh", "omm", "or"];

a9 = [
  "am",
  "is",
  "ruby-doc.",
  "opinion",
  "not",
  "your",
  "(mladen's",
  "1.9?",
  "a",
  "versioning;",
  "does",
  "have",
  "your",
  "questions",
  "out",
  "In",
  "pointed",
  "somewhere).",
  "am",
  "me",
  "(since",
  "you",
  "apidock",
  "have",
  "what",
  "I",
  "answer",
];

console.log(inArray(a0, a9)); // [ 'he', 'ou', 'pini', 'wh' ]

a1 = ["lively", "alive", "harp", "sharp", "armstrong"];

a2 = ["xyz", "live", "strong"];

// console.log(inArray(a2, a1)); // ["live", "strong"]

a3 = ["live", "strong", "arp"];

// console.log(inArray(a3, a1)); // ["arp", "live", "strong"]

a4 = ["tarp", "mice", "bull"];

// console.log(inArray(a4, a1)); // []
