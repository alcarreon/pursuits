// Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// parameters integer
// return integer
// examples
// pseudo code divide the integer by 2 and round down

let oddCount = (n) => {
  return Math.floor(n / 2);
};

console.log(oddCount(15)); // 7
console.log(oddCount(7)); // 3
console.log(oddCount(15023)); // 7511
console.log(oddCount(1632963488817984));
