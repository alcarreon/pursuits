// Ordered Count of Characters

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// parameters string
// returns array
// examples
// pseudo code given a string create a new set by destructuring the array when creating the new set and then destructuring the set to get it back into an array this gives us the individual charactes of the string, then use map to go through the array and split the original string using the individual letters from the set, find the length of the ensuing array and subtract one

const orderedCount = (str) =>
  [...new Set([...str])].map((char) => [char, str.split(char).length - 1]);

// console.log(orderedCount("abracadabra"));
// console.log(orderedCount("Code Wars"));
// console.log(orderedCount("233312"));

// Name Array Capping

// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// parameters array
// returns array
// examples
// pseudo code given an array map through it and select the first character and uppercase it, then select the remaining characters in the element and lowercase them

const capMe = (arr) => {
  return arr.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase());
};

// console.log(capMe(['jo', 'nelson', 'jurie']))     // returns ['Jo', 'Nelson', 'Jurie']
// console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']

// V A P O R C O D E
// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// parameters string
// returns string
// examples
// pseudo code given a string split it into an array and then use filter to remove the spaces, then in order to get the last character of the array take the length of the sanitized array minus 2, check to see that the index of the current element is lower than the length of the array minus two and then uppercase it and add to spaces it to, if it is the last element then just upper case it, finally take that array and join it back into a string

const vaporcode = (str) => {
  const filteredStr = str.split("").filter((x) => x != " ");
  const strLength = filteredStr.length - 2;
  return filteredStr
    .map((x, y) => {
      if (y <= strLength) {
        return x.toUpperCase() + "  ";
      } else {
        return x.toUpperCase();
      }
    })
    .join("");
};

// console.log(vaporcode('hi'));
console.log(vaporcode("Lets go to the movies")); // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// console.log(vaporcode("Why isnt my code working")); // "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
