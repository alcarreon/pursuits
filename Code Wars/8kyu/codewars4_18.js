// Make a simple function called greet that returns the most-famous "hello world!".

let greet = (_) => "hello world";

// console.log(greet());

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
let litres = (time) => (time < 1 ? 0 : Math.floor(time * 0.5));

// console.log(litres(2)); // 1
// console.log(litres(1.4)); // 0
// console.log(litres(12.3)); // 6
// console.log(litres(0.82)); // 0
// console.log(litres(11.8)); // 5
// console.log(litres(1787)); // 893
// console.log(litres(0)); // 0

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

let digitize = (arr) =>
  arr
    .toString()
    .split("")
    .reverse()
    .map((x) => Number(x));

// console.log(digitize(35231)); // [1,3,2,5,3]
// console.log(digitize(0)); // [0]

// Write a function to split a string and convert it into an array of words
let stringToArray = (str) => str.split(" ");

// console.log(stringToArray("Robin Singh")); // ["Robin", "Singh"]
// console.log(stringToArray("I love arrays they are my favorite")); // ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep = (num) => {
  let sheep = "";
  if (num === 0) {
    return sheep;
  } else {
    for (let i = 1; i <= num; i++) {
      sheep += `${i.toString()} sheep...`;
    }
  }
  return sheep;
};

// console.log(countSheep(0)) // ""
// console.log(countSheep(1)); // "1 sheep..."
// console.log(countSheep(2)); // "1 sheep...2 sheep..."
// console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep..."

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
let cockroachSpeed = (num) => Math.floor(num * 27.778);

// console.log(cockroachSpeed(1.08)); // 30
// console.log(cockroachSpeed(1.09)); // 30
// console.log(cockroachSpeed(0)); // 0

// Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
let enough = (cap, on, wait) =>
  Math.sign(cap - on - wait) >= 0 ? 0 : Math.abs(cap - on - wait);

// console.log(enough(10, 5, 5)); // 0
// console.log(enough(100, 60, 50)); // 10
// console.log(enough(20, 5, 5)); // 0

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
let sumStr = (a, b) => (+a + +b).toString();

// console.log(sumStr("4", "5")); // "9"
// console.log(sumStr("34", "5")); // "39"
// console.log(sumStr("", "")); // "0"

// Your task is to create a function that does four basic mathematical operations.

let basicOp = (op, num1, num2) => {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "-") {
    return num1 - num2;
  } else if (op === "*") {
    return num1 * num2;
  } else if (op === "/") {
    return num1 / num2;
  } else {
    return "you did not enter a number";
  }
};

// console.log(basicOp("+", 4, 7)); // 11
// console.log(basicOp("-", 15, 18)); // -3
// console.log(basicOp("*", 5, 5)); // 25
// console.log(basicOp("/", 49, 7)); // 7

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

ball1 = new Ball();
ball2 = new Ball("super");
// console.log(ball1);
// console.log(ball2);

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

let sumTwoSmallestNumbers = (arr) =>
  arr
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y, 0);

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16
