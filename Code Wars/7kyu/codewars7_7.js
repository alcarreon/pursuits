// Simple consecutive pairs
// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3.
// --the last digit has no pair, so we ignore.

// parameters array
// returns number
// examples
// pseudo code create an empty variable which will be updated, then check to see if the length of the array is odd, if it is pop the last element from the array, then go through the array and compare to see if the current element plus or minus 1 is equal to the element following it, if it is add 1 to the empty variable

const pairs = (arr) => {
  let starter = 0;
  if (arr.length % 2 == 1) {
    arr.pop;
  }
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] + 1 == arr[i + 1] || arr[i] - 1 == arr[i + 1]) {
      starter += 1;
    }
  }
  return starter;
};

// console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])); // 3
// console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])); // 2
// console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); // 0
// console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])); // 4
// console.log(pairs([73, 72, 8, 9, 73, 72])); // 3

// Task
// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

// Should the last donation be a non positive number (<= 0) John wants us:

// to return:

// Nothing in Haskell, Elm
// None in F#, Ocaml, Rust, Scala
// -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
// or to throw an error (some examples for such a case):

// IllegalArgumentException() in Clojure, Java
// ArgumentException() in C#
// echo ERROR in Shell
// argument-error in Racket
// std::invalid_argument in C++
// ValueError in Python
// So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

// parameters array and number
// returns number or error
// examples
// pseudo code given an array reduce it by adding all the values, then multiply the user provided number by the length of the array plus 1 and subtract the total of the array, use ceil to round the number to the next whole number, and then use ceil to determine if an error needs to be thrown because the average is negative

const newAvg = (arr, num) => {
  current = arr.reduce((x, y) => x + y, 0);
  if (Math.sign(Math.ceil(num * (arr.length + 1) - current)) == -1) {
    throw "nah";
  } else {
    return Math.ceil(num * (arr.length + 1) - current);
  }
};

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)); // 628
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)); // 645
