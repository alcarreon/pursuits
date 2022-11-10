// Return the first M multiples of N

// parameters two numbers
// return array
// example
// pseudo create an empty array to hold the result, then use a for loop to iterate m times pushing the result of the incrementor * second number

const multiples = (m, n) => {
  let result = [];
  for (let i = 1; i <= m; i++) {
    result.push(i * n);
  }
  return result;
};

console.log(multiples(3, 5)); // [5, 10, 15]
