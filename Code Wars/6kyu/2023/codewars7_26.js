// Consonant value
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// parameters string
// return integer
// examples
// pseudo code create an object with letters from a-z and numbers 1-26, create an array of vowels, create an empty string, split the original string, and if the character is not a vowel the element to the empty string otherwise add a space, iterate through the string splitting it at spaces, and return the number the element represents in the alphabet, filter through the array removing any empty elements, iterate through this array and check to see if the element has only one element if it does only display the element otherwise reduce the sub elements in the array

function solve(str) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let vowels = ["a", "e", "i", "o", "u"];
  let someStr = "";
  str.split("").forEach((x) => {
    if (vowels.includes(x)) {
      someStr += " ";
    } else {
      someStr += x;
    }
  });
  let totals = someStr
    .split(" ")
    .map((x) => x.split("").map((x) => alphabet[x]))
    .filter((x) => x != "");
  return totals
    .map((x) => {
      if (x.length == 1) {
        return x[0];
      } else {
        return x.reduce((x, y) => x + y);
      }
    })
    .sort((x, y) => y - x)[0];
}

// console.log(solve("zodiacs")); // 26

// console.log(solve("strength")); // 57

// console.log(solve("chruschtschov")); // 80

// console.log(solve("khrushchev")); // 38

// console.log(solve("catchphrase")); // 73

// console.log(solve("twelfthstreet")); // 103

// console.log(solve("mischtschenkoana")); // 80
