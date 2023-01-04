// Strings: swap vowels' case

// DESCRIPTION:
// Special thanks to SteffenVogel_79 for the idea.

// Challenge:

// Given a string, return a copy of the string with the vowels' case swapped.

// For this kata, assume that vowels are in the set "aeouiAEOUI".

// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

// Addendum: Your solution is only required to work for the ASCII character set.

// Please make sure you only swap cases for the vowels.

// parameters string
// return string
// examples
// pseudo code create a variable to hold a string of vowels, and an empty string variable, iterate through the string with a for loop check to see if the character is a vowel if it is then check to see if it is uppercase or lowercase and return the oppositive, if the character is not a vowel return the character as it appears

const swapVowelCase = (str) => {
  const vowels = "aeiou";
  let holder = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      str[i] === str[i].toUpperCase()
        ? (holder += str[i].toLowerCase())
        : (holder += str[i].toUpperCase());
    } else {
      holder += str[i];
    }
  }
  return holder;
};

console.log(swapVowelCase(" ")); // ''
console.log(swapVowelCase("C Is AlIvE!")); // "C is alive!"
console.log(swapVowelCase("to")); // "tO"
console.log(swapVowelCase("The")); // "ThE"
