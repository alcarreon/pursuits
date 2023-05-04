// Adding Arrays

// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [
//   ['J','L','L','M'],
//   ['u','i','i','a'],
//   ['s','v','f','n'],
//   ['t','e','e','']
// ]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

// [
//   ['J','L','L','M'],
//   ['u','i','i','a'],
//   ['s','v','f','n'],
//   ['t','e','e','']
// ] // => "Just Live Life Man"

// [
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ]
// ] // => "The Mitochondria is the powerhouse of the cell"

// parameters array
// return string
// examples
// pseudo code create an empty variable to hold a string, and another variable with the length of the first element of the array, use a for loop and a map to iterate over the array and get each element adding it to the string, add a space between each iteration of the for loop and trim any trailing whitespace

function arrAdder(arr) {
  let holder = "";
  let times = arr[0].length - 1;
  for (let i = 0; i <= times; i++) {
    arr.map((x) => {
      holder += `${x[i]}`;
    });
    holder += " ";
  }
  return holder.trim();
}

console.log(
  arrAdder([
    ["J", "L", "L", "M"],
    ["u", "i", "i", "a"],
    ["s", "v", "f", "n"],
    ["t", "e", "e", ""],
  ])
); // "Just Live Life Man"

// console.log(arrAdder([
//     [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//     [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//     [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//     [ '', 'o', '', '', 'e', '', '', 'l' ],
//     [ '', 'c', '', '', 'r', '', '', '' ],
//     [ '', 'h', '', '', 'h', '', '', '' ],
//     [ '', 'o', '', '', 'o', '', '', '' ],
//     [ '', 'n', '', '', 'u', '', '', '' ],
//     [ '', 'd', '', '', 's', '', '', '' ],
//     [ '', 'r', '', '', 'e', '', '', '' ],
//     [ '', 'i', '', '', '', '', '', '' ],
//     [ '', 'a', '', '', '', '', '', '' ] ])); // "The Mitochondria is the powerhouse of the cell"
