// Mexican Wave
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// parameters string
// return array
// examples
// pseudo code given a string descruture it into an array and iterate through it, slice the original string so that it gets the current position and uppercases it then join it with the rest of the string

const wave = (str) =>
  [...str]
    .map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1))
    .filter((x) => x != str);

// console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// console.log(wave("codewars")); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
// console.log(wave("")); // []
// console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
// console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "]
