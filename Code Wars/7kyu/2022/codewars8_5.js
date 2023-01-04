// Folding your way to the moon

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.

// parameters number
// returns number
// examples
// pseudo code create a variable to hold the thickness of the page, and another to count the number of times the page has been folded, check to see if the distance is less than zero,  otherwise multiply the thickness by two and increase the count of the folds by one return the count of the folds

let foldTo = (distance) => {
  let paper = 0.0001;
  let folds = 0;
  if (distance <= 0) {
    return null;
  } else {
    while (distance > paper) {
      paper *= 2;
      folds += 1;
    }
  }
  return folds;
};

console.log(foldTo(384000000)); // 42
