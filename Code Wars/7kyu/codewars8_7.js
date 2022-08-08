// Substituting Variables Into Strings: Padded Numbers

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// pamaters integer
// returns string
// examples
// pseudo code given an integer find the number of padding 0's by converting the integer into a string and subtracting it from 5, create an empty variable to hold the 0's, use a foor loop to populate the string with 0's and a string template to create the final string

const solution = (num) => {
  const zeroNeeded = 5 - num.toString().length;
  let holder = "";
  for (let i = 1; i <= zeroNeeded; i++) {
    holder += 0;
  }
  return `Value is ${holder}${num}`;
};

console.log(solution(5)); // "Value is 00005"
console.log(solution(498));
// console.log(solution(1204)); // "Value is 01204"
// console.log(solution(109)); // "Value is 00109"
// console.log(solution(0)); // "Value is 00000"
