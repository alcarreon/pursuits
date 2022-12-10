// Is it even?

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// parameters number
// return boolean
// examples
// pseudo code given a number use modulus to see if the remainder is 0

function testEven(num) {
  return num % 2 == 0;
}

console.log(testEven(0)); // true
console.log(testEven(0.5)); // false
console.log(testEven(1)); // false
console.log(testEven(-4)); // true
