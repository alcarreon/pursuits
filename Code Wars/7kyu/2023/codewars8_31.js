// SillyCASE

// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")
//            --^-- midpoint
//         bri    first half (lower-cased)
//            AN second half (upper-cased)

// parameters string
// return string
// examples
// psuedo code find the halfway point by dividing the length of the string by 2 and rounding up, then use slice to get the different parts of the string
function sillycase(str) {
  const half = Math.round(str.length / 2);
  return str.slice(0, half).toLowerCase() + str.slice(half).toUpperCase();
}

console.log(sillycase("foobar")); // "fooBAR"

console.log(sillycase("codewars")); // "codeWARS"

console.log(sillycase("brian")); // "briAN"
