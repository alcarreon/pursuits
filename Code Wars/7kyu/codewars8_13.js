// Length and two values.
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

// parameters integer, string, string
// returns array
// examples
// psuedo code create an empty array to hold the result to be returned, check to see if the number is 0 return an empty array if it is otherwise use a for loop to push the values depending on whether the iterator was even or not

const alternate = (num, val1, val2) => {
  let holder = [];
  if (num == 0) {
    return [];
  } else {
    for (let i = 0; i < num; i++) {
      i % 2 == 0 ? holder.push(val1) : holder.push(val2);
    }
  }

  return holder;
};

console.log(alternate(5, true, false)); // [true, false, true, false, true]
console.log(alternate(20, "blue", "red")); // ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
console.log(alternate(0, "lemons", "apples")); // []
