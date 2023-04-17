// Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// parameters 3 integers
// return boolean
// example
// pseudo code given three integers add up the sides except for one and compare to see if they are bigger than the one side

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(1, 2, 2)); // true

console.log(isTriangle(7, 2, 2)); // false

console.log(isTriangle(1, 2, 3)); // false

console.log(isTriangle(3, 4, 0)); // false

console.log(isTriangle(10, 5, 5)); // false
