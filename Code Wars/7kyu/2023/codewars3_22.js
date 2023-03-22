// Alphabetically ordered

// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)

// parameters string
// return boolean
// examples
// pseudo code given a string split it into an array of individual characters, sort the array then join it into a string then compare it to the original string

function alphabetic(str) {
  return str.split("").sort().join("") === str;
}

console.log(alphabetic("asd")); // false

console.log(alphabetic("codewars")); // false

console.log(alphabetic("door")); // true

console.log(alphabetic("cell")); // true

console.log(alphabetic("z")); // true

console.log(alphabetic("")); // true
