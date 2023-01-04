// Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// parameters array of numbers
// returns number
// examples
// pseudo code given an array of numbers convert them into a single string, then use parseint to convert it into binary return the converted number

let binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

// console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
// console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
// console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
// console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6

// Number of People in the Bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// parameters given an array of arrays
// returns number
// examples
// pseudo code each array in the larger array has two values, the first is people getting onto the bus the second is people getting off of the bus, get the total number of people getting on the bus by looping through the array and then adding all the elments together, get the total number of people getting off the bus by looping through the array and then adding all the elements together, finally subtract the total number of people who go onto the bus from the people who got off the bus

let number = (arr) => {
  let totalGetOnBus = arr.map((x) => x[0]).reduce((x, y) => x + y);
  let totalOffBus = arr.map((x) => x[1]).reduce((x, y) => x + y);
  return totalGetOnBus - totalOffBus;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); // 17
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
); // 21
console.log(number([[0, 0]])); // 0
