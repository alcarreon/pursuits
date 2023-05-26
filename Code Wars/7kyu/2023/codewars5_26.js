// Vowel one

// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

// parameters string
// return string
// examples
// pseudo code crate an array of vowels, and then split the string into an array, iterate over the array and check to see if the element is a vowel if it is change the element to 1 otherwise change the element to 0 jon the array back into a string

function vowelOne(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  return arr.map((x) => (vowels.includes(x.toLowerCase()) ? 1 : 0)).join("");
}

console.log(vowelOne("vowelOne")); // "01010101"

console.log(vowelOne("123, arou")); // "000001011"
