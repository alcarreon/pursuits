// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

let areYouPlayingBanjo = (str) =>
  str[0].toLowerCase() == "r"
    ? `${str} plays banjo`
    : `${str} does not play banjo`;

// console.log(areYouPlayingBanjo("Adam")); // "Adam does not play banjo"
// console.log(areYouPlayingBanjo("Paul")); // "Paul does not play banjo"
// console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"
// console.log(areYouPlayingBanjo("bravo")); // "bravo does not play banjo"
// console.log(areYouPlayingBanjo("rolf")); // "rolf plays banjo"

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

let zeroFuel = (pumpMiles, mpg, fuel) => mpg * fuel >= pumpMiles;

// console.log(zeroFuel(50, 25, 2)); // true
// console.log(zeroFuel(100, 50, 1)); // false

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

let simpleMultiplication = (num) => (num % 2 === 0 ? num * 8 : num * 9);

// console.log(simpleMultiplication(2)); // 16
// console.log(simpleMultiplication(1)); // 9
// console.log(simpleMultiplication(8)); // 64
// console.log(simpleMultiplication(4)); // 32
// console.log(simpleMultiplication(5)); // 45

// Implement a function which multiplies two numbers.
let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(2, 3)); // 6

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

let rentalCarCost = (days) => {
  if (days < 3) {
    return 40 * days;
  } else if (days < 7 && days >= 3) {
    return 40 * days - 20;
  } else {
    return 40 * days - 50;
  }
};

// console.log(rentalCarCost(1)); // 40
// console.log(rentalCarCost(2)); // 80
// console.log(rentalCarCost(3)); // 100
// console.log(rentalCarCost(6)); // 220
// console.log(rentalCarCost(7)); // 230
// console.log(rentalCarCost(8)); // 270

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

let points = (arr) => {
  let count = 0;
  arr.map((x) => {
    if (x[0] > x[2]) {
      count += 3;
    } else if (x[0] < x[2]) {
      count += 0;
    } else if (x[0] == x[2]) {
      count += 1;
    }
  });
  return count;
};

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// ); // 30
// console.log(
//   points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
// ); // 10
// console.log(
//   points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
// ); // 0
// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
// ); // 15
// console.log(
//   points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
// ); // 12

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

let areaOrPerimeter = (num1, num2) =>
  num1 == num2 ? Math.pow(num1, 2) : 2 * (num1 + num2);

// console.log(areaOrPerimeter(4, 4)); // 16
// console.log(areaOrPerimeter(6, 10)); // 32

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

let between = (num1, num2) => {
  let total = [];
  for (num1; num1 <= num2; num1++) {
    total.push(num1);
  }
  return total;
};

console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]
