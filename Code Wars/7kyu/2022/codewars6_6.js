// Switcheroo

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// parameters str
// returns str
// examples
// pseudo code given a string split it into a list seperating by each character, then map through the array and check each element to see if it is a or b and switch them accordingly otherwise return the element

const switcheroo = (str) => {
  let strArr = str.split("");
  return strArr
    .map((x) => {
      if (x == "a") {
        return "b";
      } else if (x == "b") {
        return "a";
      } else {
        return x;
      }
    })
    .join("");
};

// console.log(switcheroo("abc")); // 'bac'
// console.log(switcheroo("aaabcccbaaa")); // 'bbbacccabbb'
// console.log(switcheroo("ccccc")); // 'ccccc'

// Filter the number
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// parameters string
// returns number
// examples
// pseudo code given a string split it by each character into an array, then filter through the array and check if the element is not NaN then join the array by each character and convert it to a number using + notation

const FilterString = (value) =>
  +value
    .split("")
    .filter((n) => !isNaN(n))
    .join("");

console.log(FilterString("123")); // 123
console.log(FilterString("a1b2c3")); // 123
console.log(FilterString("aa1bb2cc3dd")); // 123
console.log(FilterString("30718795318438756000"));
