// Remove First and Last Character Part Two

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// parameters string
// return string
// examples
// pseudo code given a string split it by commas, then check to see if the length of the array is less than 3 if it is return null otherwise use slice to select the first and second to last element

const array = (str) => {
  let strSplit = str.split(",");
  return strSplit.length < 3
    ? null
    : strSplit.slice(1, strSplit.length - 1).join(" ");
};

console.log(array("1,2,3")); // '2'
console.log(array("1,2,3,4")); // '2 3'
console.log(array("1,2,3,4,5")); // '2 3 4'
console.log(array("")); // null
console.log(array("1")); // null
console.log(array("1,2")); // null
