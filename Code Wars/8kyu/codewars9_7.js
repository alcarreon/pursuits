// Add Length
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// parameters string
// return array
// example
// pseudo code given a string split it by spaces, then iterate through that array using map to add the length of each character to the original element

const addLength = (str) => {
  let strSplit = str.split(" ");
  return strSplit.map((x) => `${x} ${x.length}`);
};

console.log(addLength("apple ban")); // ["apple 5", "ban 3"]
console.log(addLength("you will win")); // ["you 3", "will 4", "win 3"]
