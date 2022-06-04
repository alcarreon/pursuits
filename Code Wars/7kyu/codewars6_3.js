// Sort arrays - 1

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
// parameters array
// returns array
// examples
// psuedo code given an array use the sort() method

sortme = (arr) => arr.sort();

console.log(sortme(["one", "two", "three"])); // ["one", "three", "two"]

// Simple beads count
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// parameters num
// returns num
// examples
// pseudo code start the count at two if the number provided is less than two return 0 otherwise add 2 to the starting number for every time the loop runs until it reaches the user provided number
const countRedBeads = (num) => {
  let start = 2;
  if (num < 2) {
    return 0;
  } else {
    for (let i = 3; i <= num; i++) {
      start += 2;
    }
    return start;
  }
};

console.log(countRedBeads(0)); // 0
console.log(countRedBeads(1)); // 0
console.log(countRedBeads(3)); // 4
console.log(countRedBeads(4)); // 6
console.log(countRedBeads(5)); // 8
console.log(countRedBeads(6)); // 10
