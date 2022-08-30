// Contamination #1 -String-

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// parameters string, string
// return string
// examples
// pseudo code create an empty variable to hold the result, check to see if the text or char are empty strings if they are return an empty string, otherwise iterate through text and add char to the empty variable

const contamination = (text, char) => {
  let holder = "";
  if (text === "" || char === "") {
    return "";
  } else {
    for (let i = 0; i < text.length; i++) {
      holder += char;
    }
  }
  return holder;
};

console.log(contamination("abc", "z")); // "zzz"
console.log(contamination("", "z")); // ""
console.log(contamination("abc", "")); // ""
console.log(contamination("_3ebzgh4", "&")); // "&&&&&&&&"
console.log(contamination("//case", " ")); // "      "
