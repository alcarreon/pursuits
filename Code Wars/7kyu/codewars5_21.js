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
