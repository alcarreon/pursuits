// Turkish National Identity Number

// Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

// It is an 11 digit number
// First digit can't be zero
// Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulus 10 of the result should be equal to 10th digit.
// Sum of first ten digits' modulus 10 should be equal to eleventh digit.
// Example:

// 10167994524
// //  1+1+7+9+5= 23   // "Take the sum of 1st, 3rd, 5th, 7th and 9th digit..."
// //    23 * 7= 161   //  "...and multiply it by 7"
// //   0+6+9+4 = 19   // "Take the sum of 2nd, 4th, 6th and 8th digits..."
// // 161 - 19 = 142   // "...and subtract from first value"
// // "Modulus 10 of the result should be equal to 10th digit"
// 10167994524
//          ^ = 2 = 142 % 10
// // 1+0+1+6+7+9+9+4+5+2 = 44
// // "Sum of first ten digits' modulus 10 should be equal to eleventh digit"
// 10167994524
//           ^ = 4 = 44 % 10
// Your task is to write a function to check the validity of a given number. Return true or false accordingly.

// Note: The input can be a string in some cases.

// parameters integer or string
// return boolean
// examples
// pseudo code convert the parameter into a string and split it by each character, then check to see if the parameter is not a number, if it is check to see that the length of the arry is 11 if it is obtain the even and odd numbers by iterating over the array and checking their index, check the result of the operations against the number at the respective spot in the array

function checkValidTrNumber(num) {
  let splitNum = num.toString().split("");
  if (typeof num != "number") {
    return false;
  } else if (splitNum.length == 11) {
    let oddNums =
      splitNum
        .filter((x, y) => y < splitNum.length - 1 && y % 2 == 0)
        .reduce((x, y) => +x + +y, 0) * 7;
    let evenNums = splitNum
      .filter((x, y) => y < splitNum.length - 2 && y % 2 == 1)
      .reduce((x, y) => +x + +y);
    let modResult = (oddNums - evenNums) % 10;
    let sumResult = splitNum.slice(0, 10).reduce((x, y) => +x + +y) % 10;
    if (modResult == splitNum[9] && sumResult == splitNum[10]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// console.log(checkValidTrNumber(10167994524)); // true

// console.log(checkValidTrNumber(03868894286));

// console.log(checkValidTrNumber(6923522112)); // false

// console.log(checkValidTrNumber(692352217312)); // false

// console.log(checkValidTrNumber("x5810a78432")); // false

// console.log(checkValidTrNumber(36637640050)); // true

// console.log(!checkValidTrNumber(12762438338)); // false
