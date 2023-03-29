// The First Non Repeated Character In A String

// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

// You can assume, that the input string has always non-zero length.

// Examples
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)

// parameters string
// return string
// examples
// pseudo code iterate through the string and check to see if the indexof and the last index of are the same if not return null

function firstNonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeated("test")); // 'e'

console.log(firstNonRepeated("teeter")); // 'r'

console.log(firstNonRepeated("1122321235121222")); // '5'

console.log(firstNonRepeated("rend")); // 'r'
