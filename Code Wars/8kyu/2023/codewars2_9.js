// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

// parameters string
// return integer
// examples
// pseudo code given a string use parseInt to convert it from binary into an integer

function binToDec(str) {
  return parseInt(str, 2);
}

console.log(binToDec("1")); // 1

console.log(binToDec("0")); // 0

console.log(binToDec("1001001")); // 73
