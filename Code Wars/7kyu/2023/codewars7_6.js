// Keystroking

// Ever wonder how many keystrokes any given string takes to type? No? Most normal people don't...but we're not normal! :D

// Program a num_key_strokes (string) function that takes a string and returns a count of the number of keystrokes that it took to type that string.

// For example, Hello, world! takes 15 key strokes to type.

// This kata is expecting an EN-US keyboard mapping, specifically using the QWERTY layout.

// Rules
// This kata assumes that the string was only typed using the main keyboard and NOT a number-pad.
// We also assume that the user does not hold down the Shift key and thus has to press it once every time it's needed. In addition, the CAPS LOCK key is not used.
// Every character in the input string requires either 1 or 2 keystrokes. Your goal is to figure out which ones belong in which group and count the total number of keystrokes.

// parameters string
// return integer
// examples
// pseudo code create an array of strings that require more than 1 key stroke, and an empty array to hold how many key strokes the total word has, then split the string by each character and check to see if the element is in the array of multiple key strokes if it is add 2 to the array holding the count of each character othewise add 1, reduce the array to get the total number of keystrokes per word

function numKeyStrokes(str) {
  const splitStr = str.split("");
  const multi = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "{",
    "}",
    "|",
    ":",
    '"',
    "<",
    ">",
    "?",
  ];
  let count = [];
  splitStr.forEach((x) => {
    if (x == x.toUpperCase() && x.toLowerCase() != x.toUpperCase()) {
      count.push(2);
    } else if (multi.includes(x)) {
      count.push(2);
    } else {
      count.push(1);
    }
  });
  return count.reduce((x, y) => x + y);
}

console.log(numKeyStrokes("Hello, world!")); // 15
console.log(numKeyStrokes("0297350298-02-30856-174346")); // 26
console.log(numKeyStrokes("This is a long SEnteNce.1")); // 29
