// Filling an array (part 1)
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

// parameters number
// returns array
// examples
// pseudo code given a number use a for loop to run from 0 to num - 1 and push it to an empty array variable

const arr = (num) => {
  const holder = [];
  for (let i = 0; i < num; i++) {
    holder.push(i);
  }
  return holder;
};

console.log(arr(5)); // [0,1,2,3,4]
console.log(arr()); // []
