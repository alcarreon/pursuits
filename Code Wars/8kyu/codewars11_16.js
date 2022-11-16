// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// parameters string
// return string
// examples
// pseudo code use replaceAll to iterate through the string and replace every instance of ! with an empty character

const removeExclamationMarks = (str) => {
  return str.replaceAll("!", "");
};

console.log(removeExclamationMarks("Hello World!")); // "Hello World"
