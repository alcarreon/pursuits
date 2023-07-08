// How sexy is your name?

// How sexy is your name? Write a program that calculates how sexy one's name is according to the criteria below.

// There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES (Ruby). Add up the letters (case-insensitive) in your name to get your sexy score. Ignore other characters.

//     SCORES = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
//               'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
//               'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
//               'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23}
// The program must return how sexy one's name is according to the "Sexy score ranking" chart.

//        score <= 60:   'NOT TOO SEXY'
//  61 <= score <= 300:  'PRETTY SEXY'
// 301 <= score <= 599:  'VERY SEXY'
//        score >= 600:  'THE ULTIMATE SEXIEST'

// parameters string
// return string
// examples
// pseudo code given a string convert all letters to uppercase and then split it by each character remove spaces using filter, iterate over the array using map to get the values from the object holding the alphabet, reduce the array to get the total value of the name, use a conditional to check where the name falls based on its value

function sexyName(str) {
  SCORES = {
    A: 100,
    B: 14,
    C: 9,
    D: 28,
    E: 145,
    F: 12,
    G: 3,
    H: 10,
    I: 200,
    J: 100,
    K: 114,
    L: 100,
    M: 25,
    N: 450,
    O: 80,
    P: 2,
    Q: 12,
    R: 400,
    S: 113,
    T: 405,
    U: 11,
    V: 10,
    W: 10,
    X: 3,
    Y: 210,
    Z: 23,
  };
  let splitStr = str
    .toUpperCase()
    .split("")
    .filter((x) => x != " ")
    .map((x) => SCORES[x])
    .reduce((x, y) => x + y, 0);
  if (splitStr <= 60) {
    return "NOT TOO SEXY";
  } else if (splitStr > 60 && splitStr <= 300) {
    return "PRETTY SEXY";
  } else if (splitStr > 300 && splitStr <= 599) {
    return "VERY SEXY";
  } else if (splitStr >= 600) {
    return "THE ULTIMATE SEXIEST";
  }
}

console.log(sexyName("GUV")); // "NOT TOO SEXY"

console.log(sexyName("PHUG")); // "NOT TOO SEXY"

console.log(sexyName("BOB")); // "PRETTY SEXY"

console.log(sexyName("JLJ")); // "PRETTY SEXY"

console.log(sexyName("YOU")); // "VERY SEXY"

console.log(sexyName("FABIO")); // "VERY SEXY"

console.log(sexyName("ROBBY")); // "THE ULTIMATE SEXIEST"

console.log(sexyName("SAMANTHA")); // "THE ULTIMATE SEXIEST"

console.log(sexyName("PAMELA ANDERSON"));
