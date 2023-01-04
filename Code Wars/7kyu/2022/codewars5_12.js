// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

let longest = (str1, str2) => {
  let allLeters = str1.concat(str2).split("").sort();
  return [...new Set(allLeters)].join("");
};

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

let sumDigits = (num) => {
  let holdNums = num.toString().split("");
  return holdNums
    .map((x) => +x)
    .filter((x) => !isNaN(x))
    .reduce((x, y) => x + y);
};

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5
