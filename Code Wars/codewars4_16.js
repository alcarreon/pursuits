// Simple, remove the spaces from the string, then return the resultant string.
//  /\s/g is a regular expression to find all whitespace
let noSpace = (str) => str.replace(/\s/g, "");

// console.log(noSpace("8 j 8  mBliB8g  imjB8B8  jl  B")); // 8j8mBliB8gimjB8B8jlB
noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"); //88Bifk8hB8BB8BBBB888chl8BhBfd
noSpace("8aaaaa dddd r     "); // 8aaaaaddddr

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
let countSheeps = (arr) => arr.filter((x) => x === true).length;

let array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

// console.log(countSheeps(array1));

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

let check = (arr, indx) => (arr.indexOf(indx) != -1 ? true : false);

// console.log(check([66, 101], 66)); //true
// console.log(check([101, 45, 75, 105, 99, 107], 107)); //true
// console.log(check(["t", "e", "s", "t"], "e")); //true
// console.log(check(["what", "a", "great", "kata"], "kat")); //false

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
let sum = (x) => x.reduce((x, y) => x + y, 0);

// console.log(sum([]) )// 0
// console.log(sum([1, 5.2, 4, 0, -1])) // 9.2

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
let arrayPlusArray = (x, y) => {
  arr1 = x.reduce((x, y) => x + y, 0);
  arr2 = y.reduce((x, y) => x + y, 0);
  return arr1 + arr2;
};

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // 15
// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // 2100

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

let monkeyCount = (x) => {
  let emptyArr = [];
  for (let i = 1; i <= x; i++) {
    emptyArr.push(i);
  }
  return emptyArr;
};

// console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
// console.log(monkeyCount(3)); // [1, 2, 3]
// console.log(monkeyCount(9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(monkeyCount(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(monkeyCount(20)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

let smash = (x) => x.join(" ").trim();

// console.log(smash([])) // ""
// console.log(smash(["hello"])); //"hello"
// console.log(smash(["hello", "world"])); // "hello world"
// console.log(smash(["hello", "amazing", "world"])); // "hello amazing world"
// console.log(smash(["this", "is", "a", "really", "long", "sentence"])); // "this is a really long sentence"

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

let sumMix = (arr) => arr.reduce((x, y) => Number(x) + Number(y), 0);

console.log(sumMix([9, 3, "7", "3"])); // 22
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 42
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 41
