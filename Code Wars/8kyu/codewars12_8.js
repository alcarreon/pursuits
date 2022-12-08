// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

// parameters string
// return boolean
// examples
// pseudo code given a string lowercase all letters then split it by each character into an array use reverse on the array and then join it back together check to see if the reversed string is equal to the original string with all characters set to lowercase

function isPalindrome(str) {
  let reversed = str.toLowerCase().split("").reverse().join("");

  return reversed == str.toLowerCase();
}

console.log(isPalindrome("a")); // true
console.log(isPalindrome("Abba")); // true
console.log(isPalindrome("hello")); // true
