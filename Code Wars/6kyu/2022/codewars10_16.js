// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// parameters string
// return object
// example
// pseudo code given a string split it by each character, then use reduce to count the occurances of each character

const count = (str) => {
  let splitStr = str.split("");

  let counted = splitStr.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  return counted;
};

// console.log(count("aba")); // { a: 2, b: 1 }

// console.log(count("")); // {}
