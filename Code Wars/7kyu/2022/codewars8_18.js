// Balanced Number (Special Numbers Series #1 )

// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String

// Input >> Output Examples
// (balanced-num 7) ==> return "Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digit (0)

// and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

// (balanced-num 295591) ==> return "Not Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digits (11)

// and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced

// Note : The middle digit(s) are 55 .

// (balanced-num 959) ==> return "Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digits (9)

// and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced

// Note : The middle digit is 5 .

// (balanced-num 27102983) ==> return "Not Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digits (10)

// and the sum of all digits to the right of the middle digits (20) are Not equal , then It's Not Balanced

// Note : The middle digit(s) are 02 .

// parameters number
// returns string
// examples
// pseudo code given a number split it into a string and check the length then check index value to push to arrays holding the elements for the right and left side

const balancedNum = (num) => {
  const numLength = num.toString().length;
  let rightArr = [];
  let leftArr = [];
  if (numLength == 1 || numLength == 2) {
    return "Balanced";
  }
  if (numLength % 2 == 1) {
    let splitNums = num.toString().split("");
    splitNums.forEach((x, y) => {
      if (y < Math.floor(numLength / 2)) {
        rightArr.push(x);
      } else if (y > Math.floor(numLength / 2)) {
        leftArr.push(x);
      }
    });
  } else if (numLength % 2 == 0) {
    let someNums = num.toString().split("");
    someNums.forEach((x, y) => {
      if (y < numLength / 2 - 1) {
        rightArr.push(x);
      } else if (y > numLength / 2) {
        leftArr.push(x);
      }
    });
  }
  let rightSum = rightArr.reduce((x, y) => +x + +y);
  let leftSum = leftArr.reduce((x, y) => +x + +y);
  if (rightSum == leftSum) {
    return "Balanced";
  } else {
    return "Not Balanced";
  }
};

// console.log(balancedNum(7)); // "Balanced"
// console.log(balancedNum(959)); // "Balanced"
// console.log(balancedNum(9591234)); // 1 is the middle at index 3
// console.log(balancedNum(13)); // "Balanced"
// console.log(balancedNum(56239814)); // "Balanced"
// console.log(balancedNum(295591)); // "Not Balanced"
// console.log(balancedNum(432)); // "Not Balanced"
// console.log(balancedNum(1024)); // "Not Balanced"
// console.log(balancedNum(1111)); // "Not Balanced"
console.log(balancedNum(1024123456)); // should be 1 and 2
// console.log(balancedNum(56239814));
