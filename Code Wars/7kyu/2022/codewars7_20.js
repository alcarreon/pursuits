// The reject() function

// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

// parameters array, predicate function
// returns array
// examples
// pseudo code given an array and a predicate function use the ! to get the opposite of the function within a filter for the array

const reject = (arr, predicate) => {
  return arr.filter((x) => !predicate(x));
};

console.log(
  reject([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
  })
); // [1, 3, 5]
