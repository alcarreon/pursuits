// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// parameters string
// returns boolean
// examples
// pseudo code given a string capitalize the string using toUpperCase() and check to see if it equal to the string provided

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

console.log("c".isUpperCase()); // false
console.log("HELLO I AM DONALD".isUpperCase()); // true
console.log("Hello World".isUpperCase()); // false
console.log("HELLO WORLD".isUpperCase()); // true
console.log("#LOVEWINS".isUpperCase()); // true
