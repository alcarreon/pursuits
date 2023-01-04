// Changing letters
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// parameters string
// returns string
// examples
// psuedo code create a variable with vowels in it, then split the provided string and iterrate through it checking to see if each element is in the variable holding the vowels
const swap = (str) => {
  vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("").map((x) => {
    return vowels.includes(x.toLowerCase()) ? x.toUpperCase() : x;
  });
  return strArr.join("");
};

// console.log(doTest("")); // ""
// console.log(doTest("   @@@")); // "   @@@"
console.log(swap("aBRaCaDaBRa")); // "ABRACADABRA"
console.log(swap("Hello World!"));
