// Return the number (count) of vowels in the given string.
let getCount = (str) => {
  check = str.split("");
  vowelsCount = 0;
  checked = check.map((x) => {
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
      ++vowelsCount;
    }
  });
  return vowelsCount;
};

// console.log(getCount("abracadabra"));

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

let squareDigits = (num) => {
  let coreNums = num.toString().split("");
  let stringed = coreNums.map((x) => Math.pow(+x, 2));
  return +stringed.join("");
};

console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(0)); // 0
