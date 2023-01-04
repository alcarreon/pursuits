// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

let greet = (str1, str2) => (str1 == str2 ? "Hello boss" : "Hello guest");

// console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
// console.log(greet('Greg', 'Daniel')); // 'Hello guest'

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

let feast = (str1, str2) => {
  let str1Start = str1[0];
  let str1End = str1[str1.length - 1];
  let str2Start = str2[0];
  let str2End = str2[str2.length - 1];
  return str1Start == str2Start && str1End == str2End;
};

console.log(feast("great blue heron", "garlic naan")); // true
console.log(feast("chickadee", "chocolate cake")); // true
console.log(feast("brown bear", "bear claw")); // false
