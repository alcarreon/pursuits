// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .

// parameters divisor, bound
// returns largest integer divisble by divisor but less than bound
// examples
// psuedo code create an empty array to hold values, start from 1 up to and including the bound, for each number see if mod divisor == 0 if true add it to the array, then get the last element from the array number will always be greater than 0

const maxMultiple = (num1, num2) => {
  const holder = [];
  for (let i = 1; i <= num2; i++) {
    if (i % num1 == 0) {
      holder.push(i);
    }
  }
  return holder[holder.length - 1];
};

// console.log(maxMultiple(2, 7)); // 6
// console.log(maxMultiple(3, 10)); // 9
// console.log(maxMultiple(7, 17)); // 14
// console.log(maxMultiple(10, 50)); // 50
// console.log(maxMultiple(37, 200)); // 185
// console.log(maxMultiple(7, 100)); // 98

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// parameters parameter value
// returns array from 1 to N with multiples of 3, 5, and 15
// examples
// pseudo code iterate through 1 to parameter value check if the value is divisible by 3 replace value with fizz, 5 replace value with buzz, and 15 replace the number with fizzbuzz

let fizzbuzz = (num) => {
  const holder = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 == 0) {
      holder.push("FizzBuzz");
    } else if (i % 3 == 0) {
      holder.push("Fizz");
    } else if (i % 5 == 0) {
      holder.push("Buzz");
    } else {
      holder.push(i);
    }
  }
  return holder;
};

console.log(fizzbuzz(3));
