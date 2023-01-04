// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

let XO = (str) => {
  let total = str.toLowerCase().split("");
  let totalX = total.filter((x) => x == "x").length;
  let totalY = total.filter((x) => x == "o").length;
  if (totalX == totalY) {
    return true;
  } else {
    return false;
  }
};

// console.log(XO("xo")); // true
// console.log(XO("xxOo")); // true
// console.log(XO("xxxm")); // false
// console.log(XO("Oo")); // false
// console.log(XO("ooom")); // false

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

let DNAStrand = (str) => {
  let arrStr = str.toLowerCase().split("");
  let compliments = arrStr.map((x) => {
    if (x === "a") {
      return "T";
    } else if (x == "c") {
      return "G";
    } else if (x == "t") {
      return "A";
    } else if (x == "g") {
      return "C";
    }
  });
  return compliments.join("");
};

// console.log(DNAStrand("AAAA")); // "TTTT"
// console.log(DNAStrand("ATTGC")); // "TAACG"
// console.log(DNAStrand("GTAT")); // "CATA"

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

let getSum = (a, b) => {
  let total = 0;
  if (a == b) {
    return a;
  } else if (a < b) {
    for (a; a <= b; a++) {
      total += a;
    }
  } else if (a > b) {
    for (b; b <= a; b++) {
      total += b;
    }
  }
  return total;
};

// console.log(getSum(0, -1)); // -1
// console.log(getSum(0, 1)); // 1
// console.log(getSum(-1, 2)); // 2
// console.log(getSum(1, 1)); // 1
