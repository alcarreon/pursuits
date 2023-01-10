// Powers of 2

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// parameters number
// return array
// examples
// pseudo code create an empty array to hold the result, use a for loop to iterate num times and pushing the result to the empty array

function powersOfTwo(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

// console.log(powersOfTwo(0)); // [1]
// console.log(powersOfTwo(1)); // [1,2]
console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]
