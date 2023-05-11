// Most Likely

// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

// parameters two strings
// return boolean
// examples
// pseudo code split the strings by the colon and reduce them down to a decimal, check to see if the first argument is bigger than the second

function mostLikely(prob1, prob2) {
  let perc1 = prob1.split(":").reduce((x, y) => x / y);
  let perc2 = prob2.split(":").reduce((x, y) => x / y);
  return perc1 >= perc2;
}

console.log(mostLikely("1:3", "1:2")); // false
