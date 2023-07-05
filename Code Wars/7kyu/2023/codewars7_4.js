// Comfortable words

// A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

// That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

// The word will always be a string consisting of only ascii letters from a to z.

// To avoid problems with image availability, here's the lists of letters for each hand:

// Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
// Right: y, u, i, o, p, h, j, k, l, n, m
// Examples
// "yams"  -->  true
// "test"  -->  false

// parameters string
// return boolean
// examples
// pseudo code create variables to hold all the characters that are on the left side and the right side, split the string and check to see which array the element belongs to, iterate over the array showing which side the element belongs to checking to see that they are not consecutive

function comfortableWord(str) {
  const left = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "a",
    "s",
    "d",
    "f",
    "g",
    "z",
    "x",
    "c",
    "v",
    "b",
  ];

  const right = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];

  let holder = str.split("").map((x) => (left.includes(x) ? 0 : 1));

  return holder.every((x, y) => x != holder[y + 1]);
}

console.log(comfortableWord("yams")); // true

console.log(comfortableWord("test")); // false
