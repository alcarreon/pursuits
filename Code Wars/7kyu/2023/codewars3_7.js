// Count the Digit
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// parameters two integers
// return integer
// examples
// pseudo code create a variable to hold an empty list, and another variable to hold the count of n, use a for loop to push the numbers from 0 to n squared to a list, create a variable to modify the list of numbers by splitting them intot their individual characters, then use a nested map to iterate over the array and all elements inside it to compare it d

let nbDig = (n, d) => {
  let holder = [];
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    holder.push(Math.pow(i, 2));
  }
  let splitNums = holder.map((x) => x.toString().split(""));

  splitNums.map((x) =>
    x.map((y) => {
      if (y == d) {
        counter++;
      }
    })
  );

  return counter;
};

console.log(nbDig(10, 1)); // 4

console.log(nbDig(5750, 0)); // 4700

console.log(nbDig(11011, 2)); // 9481

console.log(nbDig(12224, 8)); // 7733
