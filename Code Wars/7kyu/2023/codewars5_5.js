// 99 Bottles of Beer

// Instructions
// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// ...and so on...

// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// Example
// [ "99 bottles of beer on the wall, 99 bottles of beer.",
//   "Take one down and pass it around, 98 bottles of beer on the wall.",
//   "98 bottles of beer on the wall, 98 bottles of beer.",

//   ...and so on...

//   "3 bottles of beer on the wall, 3 bottles of beer.",
//   "Take one down and pass it around, 2 bottles of beer on the wall.",
//   "2 bottles of beer on the wall, 2 bottles of beer.",
//   "Take one down and pass it around, 1 bottle of beer on the wall.",
//   "1 bottle of beer on the wall, 1 bottle of beer.",
//   "Take one down and pass it around, no more bottles of beer on the wall.",
//   "No more bottles of beer on the wall, no more bottles of beer.",
//   "Go to the store and buy some more, 99 bottles of beer on the wall." ]

// parameters none
// return array
// examples
// pseudo code create a variable with an empty array then use a for loop to iterate between 99 and 3 push them to the empty array, then add the last portion of the song manually by concatinating it to the array

function sing() {
  let lyrics = [];
  for (var i = 99; i >= 3; i--) {
    lyrics.push(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    lyrics.push(
      "Take one down and pass it around, " +
        (i - 1) +
        " bottles of beer on the wall."
    );
  }
  return lyrics.concat([
    "2 bottles of beer on the wall, 2 bottles of beer.",
    "Take one down and pass it around, 1 bottle of beer on the wall.",
    "1 bottle of beer on the wall, 1 bottle of beer.",
    "Take one down and pass it around, no more bottles of beer on the wall.",
    "No more bottles of beer on the wall, no more bottles of beer.",
    "Go to the store and buy some more, 99 bottles of beer on the wall.",
  ]);
}

let song = sing();
// console.log(sing());
console.log(song[0]); // '99 bottles of beer on the wall, 99 bottles of beer.'

// console.log(song[199]); // 'Go to the store and buy some more, 99 bottles of beer on the wall.'
