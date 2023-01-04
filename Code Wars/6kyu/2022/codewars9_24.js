// Last Survivors Ep.3

// Given a list of strings (of letters and spaces), and a list of numbers:

// Considering the list of strings as a 2D character array, the idea is to remove from each column, starting from bottom, as many letters as indicated in the list of numbers. Then return the remaining letters in any order as a string.

// If there aren't enough letters, just remove those you can.
// The strings in the list will all be of the same length.
// The list of numbers will be of the same length as the strings in the list of strings.
// Strings will contain only lowercase letters and spaces.
// There can be duplicated letters and numbers.
// Example:
// strings

// ["abc",
//  " z ",
//  " a "]
// numbers

//  [0,4,1]
// the output would be "a".

// parameters two arrays
// return string
// examples
// pseudo code given the array ns iterate through it using map, then create a variable to hold the columns from the array, itereate through the texts array and use the index from the ns array to select elements from the array, use substring to remove parts of the string that do not belong

const lastSurvivors = (texts, ns) =>
    ns.map((n, ci) => {
        const column = texts.map(text => {
          return text[ci].trim()}).join('');
        return column.substring(0, Math.max(0, column.length - n));
    }).join('');


// console.log(lastSurvivors(
//   [
//     " ", 
//     "z"
// ], [1])); // ''
console.log(lastSurvivors(
  [
    "abc", 
    "   ", 
    " a "
  ], [0, 4, 1])); // 'a'
// console.log(lastSurvivors(["zj", "zj"], [9, 0])); // 'jj'
// console.log(
//   lastSurvivors(
//     ["help us we are dying"],
//     [2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1]
//   )
// ); // "eeeiu"
// console.log(
//   lastSurvivors(
//     ["to   ", 
//      "  tal", 
//      "it   ", 
//      "  ari", 
//      "an   ", 
//      "  ism"],
//     [7, 6, 4, 2, 1]
//   )
// ); // "ail"
