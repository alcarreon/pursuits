// Palindrome Strings

// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

// parameters string or number
// return boolean
// examples
// pseudo code given an input check to see if it is not a string if is not convert it into a string, split the input by each character reverse the array then join it back together check to see if it is equal to the original input

const isPalindrome = (input) => {
  if (typeof input != "string") {
    input = input.toString();
  }
  return input == input.split("").reverse().join("");
};

console.log(isPalindrome("anna")); // true
console.log(isPalindrome("walter")); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123456)); // false
console.log(isPalindrome(".")); // true
console.log(isPalindrome(".!!.")); // true
