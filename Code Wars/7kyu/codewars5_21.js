// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// parameters array
// returns number
// examples
// pseudo code given an array create another array that has the numbers sorted, after sorting the array use index of the original array with the value of second element in the sorted array to find the index of the number that is in the middle

const gimme = (arr) => {
  let sortedArr = [...arr].sort((x, y) => x - y);
  let middleValue = arr.indexOf(sortedArr[1]);
  return middleValue;
};

// console.log(gimme([2, 3, 1])); // 0
// console.log(gimme([5, 10, 14])); // 1
// console.log(gimme([2.1, 3.2, 1.4])); // 0
// console.log(gimme([5.9, 10.4, 14.2])); // 1
// console.log(gimme([-2, -3.2, 1])); // 0
// console.log(gimme([-5.2, -10.6, 14])); // 0

// The Coupon Code

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// parameters user coupon code, actual coupon code, date coupon was tried to use, experation date of coupon
// returns boolean
// examples
// pseudo code convert the provided dates into date objects by storing them in their own variables, then add an additional day to the expiration date using .getDate(), finally use a conditional to see if the codes match and if the coupon date is less than or equal to the expiration date

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  const userDate = new Date(currentDate);
  const couponDate = new Date(expirationDate);
  couponDate.setDate(couponDate.getDate() + 1);
  if (enteredCode === correctCode && userDate <= couponDate) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); // true
// console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); // false
// console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")); // true
// console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")); // false

// Round up to the next multiple of 5

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// parameters number
// returns number
// examples
// pesudo code given a number divide it by 5 and then round up to the nearest whole number take the result of that and then multiply it by 5

const roundToNext5 = (num) => Math.ceil(num / 5) * 5;

// console.log(roundToNext5(0)); // 0
// console.log(roundToNext5(2)); // 5
// console.log(roundToNext5(3)); // 5
// console.log(roundToNext5(12)); // 15
// console.log(roundToNext5(21)); // 25
// console.log(roundToNext5(30)); // 30
// console.log(roundToNext5(-2)); // 0
// console.log(roundToNext5(-5)); // -5

// Flatten and sort an array
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// parameters a nested array of arrays
// returns number
// examples
// pseudo code given an array of nested arrays flatten each element back into a 1 dimensional array after that sort the array numerically into ascending order

const flattenAndSort = (arr) => arr.flat(2).sort((x, y) => x - y);
// const flattenAndSort = (arr) => [].concat(...arr).sort((x, y) => x - y);

// console.log(flattenAndSort([])); // []
// console.log(flattenAndSort([[], []])); // []
// console.log(flattenAndSort([[], [1]])); // [1]
// console.log(
//   flattenAndSort([
//     [3, 2, 1],
//     [7, 9, 8],
//     [6, 4, 5],
//   ])
// ); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); // [1, 2, 3, 4, 5, 6, 100]

// Row Weights
// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// parameters array
// returns array
// examples
// pseudo code create two variables one for team one and a second for team two, go through each array and if the element is even add it to the variable for team one, otherwise add the odd element to team two, add them both to an a new array after the total is calculated for both teams

const rowWeights = (arr) => {
  let team1 = arr.filter((x, y) => y % 2 == 0).reduce((x, y) => x + y, 0);
  let team2 = arr.filter((x, y) => y % 2 == 1).reduce((x, y) => x + y, 0);
  let totalTeams = [team1, team2];
  return totalTeams;
};

// console.log(rowWeights([80])); // [80, 0]
// console.log(rowWeights([100, 50])); // [100,50]
// console.log(rowWeights([50, 60, 70, 80])); // [120, 140]
// console.log(rowWeights([13, 27, 49])); // [62, 27]

// Power of two
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// parameters number
// returns boolean
// examples
// pseudo the first part of the expression checks to see if the number is not equal to 0, then it check to see if the number and the number - 1 converted to binary is equal to 0 in binary

const isPowerOfTwo = (num) => num != 0 && (num & (num - 1)) == 0;

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(5)); // false
