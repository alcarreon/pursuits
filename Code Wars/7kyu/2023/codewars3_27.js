// Find the index of the second occurrence of a letter in a string

// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1

function secondSymbol(s, symbol) {
  let splitS = s.split("");
  let holder = [];
  splitS.forEach((x, y) => {
    if (x == symbol) {
      holder.push(y);
    }
  });
  return holder.length == 0 || holder.length == 1 ? -1 : holder[1];
}

// console.log(secondSymbol("Hello world!!!", "l")); // 3

// console.log(secondSymbol("Hello world!!!", "o")); // 7

// console.log(secondSymbol("Hello world!!!", "A")); // -1

// console.log(secondSymbol("", "q")); // -1

// console.log(secondSymbol("Hello", "!")); // -1

console.log(secondSymbol("EvgZTrM", "Z"));
