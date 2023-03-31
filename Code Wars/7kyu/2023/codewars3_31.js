// Mispelled word
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

// parameters two strings
// return boolean
// examples
// pseudo code create an empty variable to hold the differences between strings, first check to see if the difference in lengths between the two strings is larger than 1, then check to see if one string is bigger than the other, if they are start by slicing the first string and comparing it to the second string, otherwise try slicing the second string and comparing it to the first string, if they are of equal lengths convert the second string into an array and iterate over it checking to see if the characters are the same if they are not add them to the empty array, finally check the length of the array to see if there is more than one differnce

function mispelled(str1, str2) {
  let holder = [];
  if (Math.abs(str2.length - str1.length) >= 2) {
    return false;
  } else if (Math.abs(str2.length - str1.length) == 1) {
    if (
      str1.slice(1) == str2 ||
      str1.slice(0, -1) == str2 ||
      str2.slice(1) == str1 ||
      str2.slice(0, -1) == str1
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    str2.split("").forEach((x, y) => {
      if (x != str1[y]) {
        holder.push(x);
      }
    });
  }
  return holder.length <= 1 ? true : false;
}

console.log(mispelled("versed", "xersed")); // true

console.log(mispelled("versed", "applb")); // false

console.log(mispelled("versed", "v5rsed")); // true

console.log(mispelled("1versed", "versed")); // true

console.log(mispelled("versed", "versed1")); // true

console.log(mispelled("versed", "aversed")); // true

console.log(mispelled("aaversed", "versed")); // false

console.log(mispelled("versed", "aaversed")); // false
