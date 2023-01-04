// Convert ISBN-10 to ISBN-13

// Task
// ISBN stands for International Standard Book Number.

// For more than thirty years, ISBNs were 10 digits long. On January 1, 2007 the ISBN system switched to a 13-digit format. Now all ISBNs are 13-digits long. Actually, there is not a huge difference between them. You can convert a 10-digit ISBN to a 13-digit ISBN by adding the prefix number (978) to the beginning and then recalculating the last, check digit using a fairly simple method.

// Method
// Take the ISBN ("1-85326-158-0").
// Remove the last character, which can be a number or "X".
// Add the prefix number (978) and a hyphen (-) to the beginning.
// Take the 12 digits, then alternately multiply each digit from left to right by 1 or 3.
// Add up all 12 numbers you got.
// Take the number and perform a modulo 10 division.
// If the result is 0, the check digit is 0. If it isn't 0, then subtract the result from 10. In this case, that is the check digit.
// Add the check digit to the end of the result from step 3.
// Return the 13-digit ISBN in the appropriate format:
// "prefix number - original ISBN except the last character - check digit"
// "978 - 1 - 85326 - 158 - 9"
// Example
// ISBN = "1-85326-158-0"
// remove_last_character = "1-85326-158-"
// add_prefix = "978-1-85326-158-"
// twelve_digits = 978185326158

// check_digit = 9*1 + 7*3 + 8*1 + 1*3 + 8*1 + 5*3 + 3*1 + 2*3 + 6*1 + 1*3 + 5*1 + 8*3
//             =   9 +  21 +   8 +   3 +   8 +  15 +   3 +   6 +   6 +   3 +   5 +  24
//             = 111
//             111 % 10 = 1
//             10 - 1 = 9

// thirteen_digit = 9781853261589

// return "978-1-85326-158-9"

// parameters string
// return string
// example
// pseudo code given a string create a variable to hold the orignal string with 978 at the beginning, then create another variable which just holds the numbers, create another variable to hold the result of mulitpling the numbers and adding them together, iterate through the string and if the index is even multiply by 1 if the index is odd mulitply by 3 add them all together, and then check to see if the number is divisible by 10 if it is not take 10 minus the result of the modulus, concatinate the two strings together

const isbnConverter = (isbn) => {
  let extended = "978-" + isbn.slice(0, 12);
  console.log(extended);
  let digits = extended.split("-").join("");
  console.log(digits);
  let nums = 0;
  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) nums += digits[i] * 1;
    else nums += digits[i] * 3;
  }
  nums = nums % 10 > 0 ? 10 - (nums % 10) : 0;
  return extended + nums;
};

console.log(isbnConverter("1-85326-158-0")); // 978-1-85326-158-9"

// console.log(isbnConverter("0-14-143951-3")); // "978-0-14-143951-8"

// console.log(isbnConverter("0-02-346450-X")); // "978-0-02-346450-8"

// console.log(isbnConverter("1-7982-0894-6")); // "978-1-7982-0894-6"
