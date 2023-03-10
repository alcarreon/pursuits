// Band name generator

// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

// parameters string
// return string
// examples
// pseudo code check to see if the first and last letters are the same, if they are use string template with the first character of the string combined with the rest of the string repeated, otherwise use another string template with the first character capitalized

let bandNameGenerator = (str) => {
  let firstChar = str[0].toUpperCase();
  let restStr = str.slice(1);
  if (str[0] == str[str.length - 1]) {
    return `${firstChar}${restStr.repeat(2)}`;
  } else {
    return `The ${firstChar}${restStr}`;
  }
};

console.log(bandNameGenerator("knife")); // 'The Knife'

console.log(bandNameGenerator("tart")); // 'Tartart'

console.log(bandNameGenerator("sandles")); // 'Sandlesandles'

console.log(bandNameGenerator("bed")); // 'The Bed'
