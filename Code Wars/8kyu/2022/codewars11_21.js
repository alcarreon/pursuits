// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// parameters month
// return integer
// examples
// pseudo code given a number representing a month use ceil to divide it by 3 and then round to the nearest number

function quarterOf(month) {
  return Math.ceil(month / 3);
}

console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(11)); // 4
console.log(quarterOf(5)); // 2
