// Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// parameters two integers
// return integer
// examples
// pseudo code subtract the two integers from 180

function otherAngle(a, b) {
  return 180 - a - b;
}

console.log(otherAngle(30, 60)); // 90

console.log(otherAngle(60, 60)); // 60

console.log(otherAngle(10, 20)); // 150
