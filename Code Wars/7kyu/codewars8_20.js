// SevenAte9
// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

// parameters string
// returns string
// examples
// pseudo code given a string split it into an array and add all elements that are not a 9 between 7 to an empty variable
const sevenAte9 = (str) => {
  let strArr = str.split("");
  let removed = "";

  strArr.forEach((x, y) => {
    if (!(strArr[y - 1] == "7" && x == "9" && strArr[y + 1] == "7")) {
      console.log(strArr.indexOf(x));
      removed += x;
    }
  });
  return removed;
};

// console.log(sevenAte9("797")); // '77'
// console.log(sevenAte9("7979797")); // '7777'
// console.log(sevenAte9("165561786121789797")); // '16556178612178977'
