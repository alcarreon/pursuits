// Reverse a Number
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// parameters number
// return number
// example
// pseudo code conver the number into a string and check to see if the first character is - if it is select everything after that and make it into an array by spliting the string by each character, then use reverse and join it back into a string before finally converting it bck into a number, otherwise convert the number into a string split it by each character reverse the array joining it back into a string before finally converting into a number

const reverseNumber = (num) => {
  if (num.toString()[0] == "-") {
    let selected = num
      .toString()
      .slice(1, num.toString().length)
      .split("")
      .reverse()
      .join("");
    return Number(`-${selected}`);
  } else {
    return Number(num.toString().split("").reverse().join(""));
  }
};

console.log(reverseNumber(123)); // 321

console.log(reverseNumber(-123)); // -321

console.log(reverseNumber(1000)); // 1

console.log(reverseNumber(4321234)); // 4321234

console.log(reverseNumber(5)); // 5

console.log(reverseNumber(0)); // 0

console.log(reverseNumber(98989898)); // 89898989
