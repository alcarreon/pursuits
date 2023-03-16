// filterEvenLengthWords

// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

// console.log(output); // --> ['word', 'word']

// parameters array
// return array
// examples
// pseudo code given an array iterate through it with filter checking the length of each string by modulus 2 to see if it is even

let filterEvenLengthWords = (words) => words.filter((x) => x.length % 2 == 0);

console.log(filterEvenLengthWords(["Hello", "World"])); // []

console.log(filterEvenLengthWords(["One", "Two", "Three", "Four"])); // ['Four']
