// lock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

let past = (hour, minute, second) =>
  hour + minute + second == 0
    ? 0
    : hour * 3600000 + minute * 60000 + second * 1000;

// console.log(past(0, 1, 1)); // 61000
// console.log(past(1, 1, 1)); // 3661000
// console.log(past(0, 0, 0)); // 0
// console.log(past(1, 0, 1)); // 3601000
// console.log(past(1, 0, 0)); // 3600000

// Write a function which converts the input string to uppercase.

let makeUpperCase = (str) => str.toUpperCase();

// console.log(makeUpperCase("hello")); // 'HELLO'

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

let hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5)); // true
console.log(hero(7, 4)); // false
console.log(hero(4, 5)); // false
console.log(hero(100, 40)); // true
console.log(hero(1500, 751)); // false
console.log(hero(0, 1)); // false
