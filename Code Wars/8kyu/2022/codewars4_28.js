// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// let greet = (str) => `Hello, ${str} how are you doing today?`;

// console.log(greet("Ryan")); // "Hello, Ryan how are you doing today?"
// console.log(greet("Shingles")); // "Hello, Shingles how are you doing today?"

// Implement a function which convert the given boolean value into its string representation.

let booleanToString = (bool) => bool.toString();

// console.log(booleanToString(true)); // 'true'
// console.log(booleanToString(false)); // false

// Code as fast as you can! You need to double the integer and return it.

let doubleInteger = (int) => int * 2;

console.log(doubleInteger(2)); // 4

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

let greet = (name) => {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return `Hello, ${name}!`;
  }
};
console.log(greet("Jim")); // "Hello, Jim!"
console.log(greet("Johnny")); // "Hello, my love!"

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

let isDivideBy = (number, a, b) => number % a == 0 && number % b == 0;

console.log(isDivideBy(-12, 2, -6)); // true
console.log(isDivideBy(-12, 2, -5)); // false
console.log(isDivideBy(45, 1, 6)); // false
console.log(isDivideBy(45, 5, 15)); // true
console.log(isDivideBy(4, 1, 4)); // true
console.log(isDivideBy(15, -5, 3)); // true
