// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// parameters string
// return string
// examples
// psuedo code create an array of vowels, then split the string by each character, lowercase the element then check to see if it is a vowel, if it is then replace the element with an exclamation point, otherwise return the element, return the array and then join it back into a string

function replace(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let splitStr = str.split("").map((x) => {
    if (vowels.includes(x.toLowerCase())) {
      return "!";
    } else {
      return x;
    }
  });
  return splitStr.join("");
}

console.log(replace("Hi!")); //"H!!")

console.log(replace("!Hi! Hi!")); //"!H!! H!!")

console.log(replace("aeiou")); //"!!!!!")

console.log(replace("ABCDE")); //"!BCD!")
