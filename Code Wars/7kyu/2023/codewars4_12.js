// Count consonants

// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// parameters string
// return integer
// examples
// pseudo code create an array to hold the vowels, then check to see that the string is not empty, lowercase all charactes in the string then split it by each character, iterate over the array using filter to check that the character is not a vowel and that it is a letter

function consonantCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (str == "") {
    return 0;
  } else {
    return str
      .toLowerCase()
      .split("")
      .filter(
        (x) => vowels.includes(x) == false && x.toLowerCase() != x.toUpperCase()
      ).length;
  }
}

console.log(consonantCount("")); // 0

console.log(consonantCount("aeiouAEIOU")); // 0

console.log(consonantCount("bcdfghjklmnpqrstvwxyz")); // 21

console.log(consonantCount("y")); // 1

console.log(consonantCount("Y")); // 1

console.log(consonantCount("bcd")); // 3
