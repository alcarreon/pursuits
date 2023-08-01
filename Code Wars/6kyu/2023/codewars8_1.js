// longest_palindrome

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// parameters string
// return integer
// examples
// pseudo code create an empty array to hold the results, check to see if the length of the string is if it is return 1, check to see if the string is empty if it is return 0, otherwise iterate through the string with a for loop then iterate over the remaining objects again with another for loop, check to see that j is greater than i and that they are not equal, use i and j to take a slice from the the string and compare it to the same slice reversed, if it is equal push it to the empty array, iterate over the array and sort the values in descending order if the array is empty return 1 otherwise sort the array and return the first element

function longestPalindrome(str) {
  let holder = [];
  if (str.length === 1) {
    return 1;
  } else if (str.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < str.length; i++) {
      for (let j = 1; j < str.length; j++) {
        if (j >= i && !(j == i)) {
          if (
            str.slice(i, j + 1) ==
            str
              .slice(i, j + 1)
              .split("")
              .reverse()
              .join("")
          ) {
            holder.push(str.slice(i, j + 1).length);
          }
        }
      }
    }
  }
  return holder.length === 0 ? 1 : holder.sort((x, y) => y - x)[0];
}

// console.log(longestPalindrome("racecars")); // 7

console.log(longestPalindrome("a")); // 1

console.log(longestPalindrome("aa")); // 2

console.log(longestPalindrome("baa")); // 2

console.log(longestPalindrome("aab")); // 2

console.log(longestPalindrome("zyabyz")); // 1

console.log(longestPalindrome("BaaBcd")); // 4

console.log(longestPalindrome("baablkj12345432133d")); // 9

console.log(longestPalindrome("")); // 0

console.log(longestPalindrome("Aa")); // 1
