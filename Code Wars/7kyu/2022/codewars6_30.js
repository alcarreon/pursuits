// Is every value in the array an array?

// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// parameters array
// returns boolean
// examples
// psuedo code given an array go through each index and check to see if it is an array

const arrCheck = (arr) => arr.every(Array.isArray);

// console.log(arrCheck([])); // true
// console.log(arrCheck([["string"]])); // true
// console.log(arrCheck([[], {}])); // false
// console.log(arrCheck([[1], [2], [3]])); // true
// console.log(arrCheck(["A", "R", "R", "A", "Y"])); // false

// Hit Count
// Introduction
// You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your companies software.

// You have been tasked with adding an effect to this counter to make it more interesting.

// Instead of just displaying the count value immediatley when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.

// Task
// As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.

// Rules
// The function will take one argument which will be a four character string representing hit count
// The function must return a multi-dimensional array containing four inner arrays
// The final value in each inner array must be the actual value to be displayed
// Values returned in the array must be of the type number

// parameters string
// returns nested array
// examples
// pseudo code create an empty array to hold the values, split the string into an array by each character, after the string is split into an array iterate through it using for each, at each element of the list create a new array which will hold the values from 0 to the current element, push these numbers into the array inside of the for each and after it is done push that array of numbers to the array outside of the for each

const counterEffect = (str) => {
  let starter = [];
  str.split("").forEach((x) => {
    let counter = [];
    for (let i = 0; i <= +x; i++) {
      counter.push(i);
    }
    starter.push(counter);
  });
  return starter;
};

console.log(counterEffect("1250")); // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
console.log(counterEffect("0050")); // [[0],[0],[0,1,2,3,4,5],[0]]
console.log(counterEffect("0000")); // [[0],[0],[0],[0]]
