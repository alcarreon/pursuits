// Sums of consecutive integers

// The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

// For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

// We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

// position(4, 14, 3) == 5
// Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.

function position(x, y, n) {
  return y / x - (x - 1) / 2 + n;
}

console.log(position(4, 14, 3)); // 5

console.log(position(2, 25, 0)); // 12

console.log(position(7, 749, 5)); // 109

// console.log(position(3, -9, 1)); // -3

console.log(position(5, 0, 0)); // -2
