// Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

// parameters takes a number
// returns the factorial of that number
// examples
// pseudo code create an empty variable starting at 1, shouldn't start at 0 otherwise the code would not update, check to see if the number is less than 0 or greater than 12 if it is throw a rangerror code, if it is not check to see if the value is 0 have to treat 0 differently because multiplying by 0 is not good, otherwise use a for loop to multiply the consecutive numbers up to and including the number given return that value

let factorial = (num) => {
  let start = 1;
  if (num < 0 || num > 12) {
    throw new RangeError("nope");
  } else {
    if (num == 0) {
      return 1;
    } else {
      for (let i = 1; i <= num; i++) {
        start *= i;
      }
    }
  }
  return start;
};

// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(13));

// Sum of numbers from 0 to N
// We want to generate a function that computes the series starting from 0 and ending until the given number.

// parameters number
// returns string
// examples
// pseudo code given a number use a for loop to add the numbers from that up to and including the provided number, reduce the array to get the total

var SequenceSum = (function () {
  //   let starterStr = "";
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let starter = [];
    if (Math.sign(count) == 1) {
      for (let i = 0; i <= count; i++) {
        starter.push(i);
      }
      return `${starter.join("+")} = ${starter.reduce((x, y) => x + y)}`;
    } else if (count == 0) {
      return "0=0";
    } else if (Math.sign(count) == -1) {
      return `${count}<0`;
    }
  };

  return SequenceSum;
})();

// console.log(SequenceSum.showSequence(6));
// console.log(SequenceSum.showSequence(0));
// console.log(SequenceSum.showSequence(-10));
// console.log(SequenceSum.showSequence(7));
