// make negative
let makeNegative = (num) => {
  if (num == 0) {
    return 0;
  } else {
    return -Math.abs(num);
  }
};

// console.log(makeNegative(1)); // return -1
// console.log(makeNegative(-5)); // return -5
// console.log(makeNegative(0)); // return 0
// console.log(makeNegative(0.12)); // return -0.12

// string repeat
let repeatStr = (n, s) => {
  let totalWord = "";
  for (let index = 1; index <= n; index++) {
    totalWord += s;
  }
  return totalWord;
};
// console.log(repeatStr(3, "*")); // ***
// console.log(repeatStr(5, "#")); // #####
// console.log(repeatStr(2, "ha ")); // haha

// Beginner - Lost Without a Map

let maps = (x) => x.map((x) => x * 2);

// console.log(maps([1, 2, 3]));
// console.log(maps([4, 1, 1, 1, 4]));
// console.log(maps([2, 2, 2, 2, 2, 2]));

// a needle in a haystack

let findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;
haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
haystack_2 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "needle",
  "something somebody lost a while ago",
];
haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
console.log(findNeedle(haystack_3));
