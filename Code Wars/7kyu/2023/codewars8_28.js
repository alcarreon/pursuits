// Is it a vowel on this position?

// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
// P.S. If n < 0, return false

// parameters string and integer
// return boolean
// examples
// pseudo code create an array to hold all vowels, then check to see that num is not bigger than the length of the string or that it is not negative, then use bracket notation to obtain the character from the string and convert it to lowercase, check to see if it is a vowel

function checkVowel(str, num) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (num >= str.length || num < 0) {
    return false;
  } else if (vowels.includes(str[num].toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

console.log(checkVowel("cat", 1)); // true

console.log(checkVowel("cat", 0)); // false

console.log(checkVowel("cat", 4)); // false

console.log(checkVowel("Amanda", -2)); // false

console.log(checkVowel("Amanda", 0)); // true

console.log(checkVowel("Amanda", 2)); // true

console.log(checkVowel("#$!'Gj6AwhB/Q^/", 15));
