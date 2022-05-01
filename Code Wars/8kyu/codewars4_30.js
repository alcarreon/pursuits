// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
let fakeBin = (str) => {
  return str
    .split("")
    .map((x) => {
      if (x < 5) {
        return "0";
      } else {
        return "1";
      }
    })
    .join("");
};

// console.log(fakeBin("45385593107843568")); // '01011110001100111'
// console.log(fakeBin("509321967506747")); // '101000111101101'
// console.log(fakeBin("366058562030849490134388085")); // '011011110000101010000011011'

//  Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

let paperwork = (n, m) => {
  if (Math.sign(n) == 1 && Math.sign(m) == 1) {
    return n * m;
  } else if (
    Math.sign(n) == -1 ||
    Math.sign(m) == -1 ||
    Math.sign(n) == 0 ||
    Math.sign(m) == 0
  ) {
    return 0;
  }
};

console.log(paperwork(5, 5)); // 25
console.log(paperwork(5, -5)); // 0
console.log(paperwork(-5, -5)); // 0
console.log(paperwork(-5, 5)); // 0
console.log(paperwork(5, 0)); // 0
