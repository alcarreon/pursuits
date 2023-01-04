// All Star Code Challenge #18

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// parameters string and a character
// return integer
// examples
// pseudo code given a string spli it by each character and then filter the array to match the letter use .length to return the final result

function strCount(str, letter) {
  return str.split("").filter((x) => x == letter).length;
}

console.log(strCount("Hello", "o")); // 1

console.log(strCount("Hello", "l")); // 2

console.log(strCount("", "z")); // 0

console.log(strCount("add", "d"));
