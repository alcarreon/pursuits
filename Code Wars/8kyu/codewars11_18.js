// Check same case

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// parameters character 1, character 2
// return integer
// examples
// pseudo code given two characters first check to see if they are both string, if they are not return -1, then check to see if the cases for both characters match if they do return 1, else return 0

function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}
console.log(sameCase("C", "B")); // 1
console.log(sameCase("b", "a")); // 1
console.log(sameCase("d", "d")); // 1
console.log(sameCase("A", "s")); // 0
// console.log(sameCase("c", "B")); // 0
console.log(sameCase("b", "Z")); // 0
console.log(sameCase("\t", "Z")); // -1
console.log(sameCase("H", ":")); // -1
// doTest('C', 'B', 1);
//   doTest('b', 'a', 1);
//   doTest('d', 'd', 1);
//   doTest('A', 's', 0);
//   doTest('c', 'B', 0);
//   doTest('b', 'Z', 0);
//   doTest('\t', 'Z', -1);
//   doTest('H', ':', -1);
