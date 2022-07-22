// Filter unused digits

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"

const unusedDigits = (...arr) => {
  var digits = arr.join();

  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter((x) => !digits.includes(x))
    .join("");
};

// console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(nums.includes(12));
