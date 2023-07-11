// Character Counter

// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

// parameters string
// return boolean
// examples
// pseudo code create an object to hold the count of each character, change all characters in the string into lowercase then split the string by each character, iterate over the array and if the element hasn't been added to the object add it with an initial value of 1 otherwise update the value, convert the object into a nested array and iterate over the array to see if all of the numbers are the same

function validateWord(str) {
  let counter = {};

  str
    .toLowerCase()
    .split("")
    .forEach((x) => {
      counter[x] = counter[x] + 1 || 1;
    });

  let charCount = Object.entries(counter);

  return charCount.every((x) => charCount[0][1] == x[1]);
}

console.log(validateWord("abcabc")); // true

console.log(validateWord("Abcabc")); // true

console.log(validateWord("abc123")); // true

console.log(validateWord("abcabcd")); // false

console.log(validateWord("abc!abc!")); // true

console.log(validateWord("abc:abc")); // false
