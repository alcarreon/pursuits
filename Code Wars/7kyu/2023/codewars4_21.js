// last digits of a number

// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

// parameters 2 integers
// return array
// examples
// pseudo code conver the first argument into a string then split it into an array, iterate over the array and change each value to an integer, check to see if the second argument is greater than the length of the of the array if it is retun the entire array, check to see if the second argument is negative or 0 and then return an empty array, otherwise use slice to return the last digits

function lastDigit(n, d) {
  let strN = n
    .toString()
    .split("")
    .map((x) => +x);
  if (d >= strN.length) {
    return strN;
  } else if (d <= 0) {
    return [];
  } else {
    return strN.slice(-d);
  }
}

console.log(lastDigit(1, 1)); // [1]

console.log(lastDigit(123767, 4)); // [3,7,6,7]

console.log(lastDigit(0, 1)); // [0]

console.log(lastDigit(34625647867585, 10)); // [5,6,4,7,8,6,7,5,8,5]

console.log(lastDigit(1234, 0)); // []

console.log(lastDigit(24134, -4)); // []

console.log(lastDigit(1343, 5)); // [1,3,4,3]
