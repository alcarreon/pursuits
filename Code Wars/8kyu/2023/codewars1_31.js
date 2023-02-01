// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// parameters integer
// return integer
// examples
// pseudo code create an acc parameter with a default value of zero, then given an integer check to see if it is less than or equal to 1 if it is return the value of acc otherwise recurisevly call the function checking to see whether the integer is odd or even and performing an operation on it

function hotpo(num, acc = 0) {
  if (num <= 1) {
    return acc;
  } else {
    return hotpo(num % 2 == 0 ? num / 2 : 3 * num + 1, acc + 1);
  }
}

// console.log(hotpo(1)); // 0
console.log(hotpo(5)); // 5
// console.log(hotpo(4)); // 8
// console.log(hotpo(23)); // 15
