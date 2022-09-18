// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// parameters string
// return string
// examples
// pseudo code given a string split lowercase each character and split it by each character, then create an empty variable to hold the result, create an object to ount the number of times that a letter appears in the array, then itterate through the array and check to see if that character appears more than once

const duplicateEncode = (str) => {
  const splitStr = str.toLowerCase().split("");
  let holder = "";

  const countedChar = splitStr.reduce((allChar, char) => {
    const currCount = allChar[char] ?? 0;
    return {
      ...allChar,
      [char]: currCount + 1,
    };
  }, {});

  splitStr.map((x, y) =>
    countedChar[x] == 1 ? (holder += "(") : (holder += ")")
  );

  return holder;
};

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("
