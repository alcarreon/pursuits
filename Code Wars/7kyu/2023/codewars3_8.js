// Find the nth Digit of a Number

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

// parameters two integers
// return integer
// examples
// pseudo code create a variable to hold the absolute value of the first integer, and another variable where it is converted into a string, first check to see that the second integer is positive, then check to see if the second integer is longer than the first integer, finally to get the desired character subtract the second integer from the length of the first integer and convert it back into a number

let findDigit = (num, nth) => {
  let positive = Math.abs(num);
  let stringNum = positive.toString();
  if (nth <= 0) {
    return -1;
  } else if (nth > positive.toString().length) {
    return 0;
  } else {
    return +stringNum[stringNum.length - nth];
  }
};

console.log(findDigit(5673, 4)); // 5

console.log(findDigit(129, 2)); // 2

console.log(findDigit(-2825, 3)); // 8

// console.log(findDigit(-456, 4)); // 0

// console.log(findDigit(0, 20)); // 0

// console.log(findDigit(65, 0)); // -1

// console.log(findDigit(24, -8)); // -1
