// Make acronym

// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

// parameters string
// return string
// examples
// pseudo code given a string split it into an array by each space, then iterate over the array and change the character to uppercase use join to convert the array back into a string

function toAcronym(str) {
  let splitStr = str.split(" ");
  return splitStr.map((x) => x[0].toUpperCase()).join("");
}

console.log(toAcronym("Code Wars")); // "CW"

console.log(toAcronym("Water Closet")); // "WC"

console.log(toAcronym("Portable Network Graphics")); // "PNG"

console.log(toAcronym("PHP: Hypertext Preprocessor")); //"PHP"

console.log(toAcronym("hyper text markup language")); // "HTML"
