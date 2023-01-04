// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.

let plural = (num) => num != 1;

// console.log(plural(0)); // true
// console.log(plural(0.5)); // true
// console.log(plural(1)); // false
// console.log(plural(100)); // true
// console.log(plural(Infinity)); // true

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let humanYearsCatYearsDogYears = (hyears) => {
  // return cat years after human
  // return dog years after cat yers
  // [human,cat,dog]
  let catYears = 15;
  let dogYears = 15;
  let convertedYears = [];
  for (let index = 1; index <= hyears; index++) {
    if (index == 2) {
      catYears += 9;
      dogYears += 9;
    } else if (index > 2) {
      catYears += 4;
      dogYears += 5;
    }
  }
  convertedYears.push(hyears, catYears, dogYears);
  return convertedYears;
};

console.log(humanYearsCatYearsDogYears(1)); // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); // [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); // [10,56,64]
