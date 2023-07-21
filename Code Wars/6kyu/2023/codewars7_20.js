// Validate Credit Card Number

// Here is the algorithm:

// Double every other digit, scanning from right to left, starting from the second digit (from the right).

// Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

// or:

// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:

// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

// 18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number

// parameters integer
// return boolean
// examples
// pseudo code convert the number into a string and then split it by each character, create an empty variable as an array, use a conditional to check to see if the length of the number is even or odd, then use a for loop to iterate over the array and perform the operation based on whether or not the number is greater than 9, reduce the array and then check to see if the modulus of the result by 10 is equal to 0

function validate(num) {
  let splitNum = num.toString().split("");
  let holder = [];
  if (splitNum.length % 2 == 0) {
    for (let i = 0; i < splitNum.length; i++) {
      if (i % 2 == 0) {
        if (+splitNum[i] * 2 > 9) {
          holder.push(+splitNum[i] * 2 - 9);
        } else {
          holder.push(+splitNum[i] * 2);
        }
      } else {
        holder.push(+splitNum[i]);
      }
    }
  } else {
    for (let i = 0; i < splitNum.length; i++) {
      if (i % 2 == 1) {
        if (+splitNum[i] * 2 > 9) {
          holder.push(+splitNum[i] * 2 - 9);
        } else {
          holder.push(+splitNum[i] * 2);
        }
      } else {
        holder.push(+splitNum[i]);
      }
    }
  }
  const totals = holder.reduce((x, y) => x + y, 0);
  return totals % 10 == 0 ? true : false;
}

console.log(validate(123)); // false

console.log(validate(1)); // false

console.log(validate(2121)); // true

console.log(validate(1230)); // true
