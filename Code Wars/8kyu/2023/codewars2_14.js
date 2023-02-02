// Find the position!
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

let position = (letter) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
};

console.log(position("a")); // "Position of alphabet: 1"
console.log(position("z")); // "Position of alphabet: 26"
console.log(position("e")); // "Position of alphabet: 5"
