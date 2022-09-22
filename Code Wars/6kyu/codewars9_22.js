// Assemble string

// Task
// In this task, you need to restore a string from a list of its copies.

// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

// If the array is empty, then return an empty string.

// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
// result = "abcde"

// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"

// parameters array
// return string
// example
// pseudo code given an array check to that the array is not empty then take the first element and descturture it iterate through the element checking to see if a character matches the position of the * in the rest of the array, if it does return the character if it doesnt return # join the array back into a string

const assembleString = (arr) => {
  console.log([...arr[0]]);
  //   return !arr.length
  //     ? ""
  //     : [...arr[0]].map((x, i) => {
  //         let s = arr.find((y) => y[i] != "*");
  //         return !s ? "#" : s[i];
  //       }).join``;
};

// console.log(assembleString(["a*cde", "*bcde", "abc*e"])); // "abcde"

console.log(assembleString(["a*c**", "**cd*", "a*cd*"])); // "a#cd#"

// console.log(
//   assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])
// ); // "Hello, World!"

// console.log(
//   assembleString([
//     ".** . .' .'' ! ! .",
//     ". . . .' **' ! * .",
//     "* . .*.* .'' * ! .",
//     ". . .*.' .**** ! .",
//     "**. * .* .*' ! ! .",
//   ])
// ); // ". . . .' .'' ! ! ."

// console.log(
//   assembleString([". . . .", ". . . .", ". . . .", ". . . .", ". . . ."])
// ); // ". . . ."

// console.log(
//   assembleString([
//     "12***6789",
//     "**3456789",
//     "12345**8*",
//     "***456**9",
//     "1*3*5*7*9",
//     "*2*456789",
//   ])
// ); // "123456789"

// console.log(assembleString(["******", "******", "******", "******"])); // "######"

// console.log(
//   assembleString([
//     "*#*#*#*#*#*#*#*",
//     "*#*#*#*#*#*#*#*",
//     "*#*#*#*#*#*#*#*",
//     "*#*#*#*#*#*#*#*",
//   ])
// ); // "###############"
