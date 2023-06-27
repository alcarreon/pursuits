// Noonerize Me

// Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

// You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

// [123, 456] = 423 - 156 = 267
// Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

// When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.

// parameters array
// return integer or string
// examples
// psuedo code split the elements in the array by each character, then to get the first number take the first index of the second element and then join the remainder of the first element, and then take the first index of the first element along with the remainder of the second element joining the remainder, convert each into a number and return the absolute value if they are both numbers

function noonerize(arr) {
  let splitNum = arr.map((x) => x.toString().split(""));
  let first = +`${splitNum[1][0]}${splitNum[0].slice(1).join("")}`;
  let second = +`${splitNum[0][0]}${splitNum[1].slice(1).join("")}`;
  const notNum = arr.filter((x) => {
    return typeof x != "number";
  });
  return notNum.length == 0 ? Math.abs(first - second) : "invalid array";
}

// console.log(noonerize([12, 34])); // 18
// should be 32 - 14

// console.log(noonerize([55, 63])); // 12

// console.log(noonerize([357, 579])); // 178

// console.log(noonerize(["hello", "world"])); // 'invalid array'

// should be 557 - 379

// console.log(noonerize([1000000, 9999999])); // 7000001
