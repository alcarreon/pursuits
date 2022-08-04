// Wealth equality, finally!

// The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

// Their first act in power is absolute wealth equality through coercive redistribution.

// Create a function that redistributes all wealth equally among all citizens.

// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth.

// Info:

// MUTATE the input array/list, don't return anything
// Input is guaranteed to hold at least 1 citizen
// Wealth of a citizen will be an integer with minimum equal to 0 (negative wealth is not possible)
// Handling of floating point error will not be tested

// parameters array
// returns array
// examples
// pseudo code given an array find the average using reduce and dividing by the length of the array, change the array using a for in loop and setting each element to the average

const wealthEqual = [5, 5, 5, 5, 5];
const wealthUnequal = [0, 10];
const wealthSingle = [5];
const wealthFloat = [3, 2, 2];

let redistributeWealth = (wealth) => {
  let target = wealth.reduce((a, b) => a + b, 0) / wealth.length;
  for (let money in wealth) {
    wealth[money] = target;
  }
};
console.log(wealthUnequal);
// console.log(redistributeWealth(wealthEqual)); // [5,5,5,5,5]
console.log(redistributeWealth(wealthUnequal)); // [5, 5]
// console.log(redistributeWealth(wealthSingle)); //[5]
// console.log(redistributeWealth(wealthFloat)); // [2.3333333333333335,2.3333333333333335, 2.3333333333333335]
