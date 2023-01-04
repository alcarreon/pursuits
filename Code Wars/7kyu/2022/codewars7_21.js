// Multiply the strings in the array
// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'

// parameters array
// returns string
// examples
// pseudo code given an array reduce it mulitplying the elements inside then convert it to a string

const arrMultiply = (arr) => arr.reduce((x, y) => +x * +y).toString();

// console.log(arrMultiply(["4", "5"])); // "20"
// console.log(arrMultiply(["2", "-5"])); // "-10"
// console.log(arrMultiply(["9", "0"])); // "0"

// Jenny the youngest detective
// Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

// Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

// parameters array, string
// results string
// examples
// pseudo code split the string to remove spaces and make all the characters lowercase, then sort the given array and check to see if the length of the string is less than the length of the array if it is there is a number outside of the length of the string, otherwise return the position of the array indexing the string

const missingWord = (arr, str) => {
  let fixedStr = str.split(" ").join("").toLowerCase();
  if (
    arr
      .sort((x, y) => x - y)
      .map((x) => fixedStr[x])
      .join("").length < arr.length
  ) {
    return "No mission today";
  } else {
    return arr
      .sort((x, y) => x - y)
      .map((x) => fixedStr[x])
      .join("");
  }
};

// console.log(missingWord([5, 0, 3], "I love you")); // "ivy"
console.log(
  missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")
); // "bay"
console.log(missingWord([12, 4, 6], "Good Morning")); // "No mission today"
