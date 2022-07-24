// Filter unused digits

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"

// parameters numbers
// returns string
// examples
// pseudo code given a collection of numbers join them into a string, then create an array from 0 - 9 and use filter to display only the numbers that are not already given by the user

const unusedDigits = (...arr) => {
  var digits = arr.join();

  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter((x) => !digits.includes(x))
    .join("");
};

// console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(nums.includes(12));
