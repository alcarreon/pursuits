// Filter Long Words
// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// parameters string and number
// returns array
// examples
// psuedo code given a string and number split the string into an array, then use filter and check each length of the element to see if it is larger than the number provided by the user

const filterLongWords = (str, num) =>
  str.split(" ").filter((x) => x.length > num);

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4)); // ['quick', 'brown', 'jumps']
