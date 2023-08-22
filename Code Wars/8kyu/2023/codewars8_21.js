// Sum of Multiples

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// parameters two integers
// return text or integers
// examples
// pseudo code given two integers check to see that neither of them are negative or that they are the same number, if they are not use a for loop to iterate and the result to a variable holding the count

function sumMul(num1, num2) {
  let counter = 0;
  if (Math.sign(num1) == -1 || Math.sign(num2) == -1 || num1 == num2) {
    return "INVALID";
  } else {
    for (let i = num1; i < num2; i += num1) {
      counter += i;
    }
    return counter;
  }
}

console.log(sumMul(0, 0)); // "INVALID"

console.log(sumMul(2, 9)); // 20

console.log(sumMul(4, -7)); // "INVALID"
