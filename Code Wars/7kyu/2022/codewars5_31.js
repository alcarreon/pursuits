// Sum of angles

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// parameters number
// returns number
// examples
// pseudo code the forumal to find the total number of angles in an n side polygon is (2n-4) * 90 where you replace n with the argument

const angle = (num) => (2 * num - 4) * 90;

// console.log(angle(3)); // 180
// console.log(angle(4)); // 360

// Fix string case

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// parameters
// returns
// examples
// pseudo code

const solve = (str) => {
  lowerStr = str.split("").filter((x) => x == x.toLowerCase());
  upperStr = str.split("").filter((x) => x == x.toUpperCase());
  if (lowerStr.length < upperStr.length) {
    return str.toUpperCase();
  } else if (lowerStr.length > upperStr.length) {
    return str.toLowerCase();
  } else {
    return str.toLowerCase();
  }
};

// console.log(solve("code")); // "code"
// console.log(solve("CODe")); // "CODE"
// console.log(solve("COde")); // "code"
// console.log(solve("Code")); // "code"
