// Split The Bill

// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// parameters object
// returns object
// examples
// pseudo code given an object determine the average cost between the group by getting the values of the object and reducing them then dividing by the length of the array holding the values, then check each key to see if the number needs to be added to or subtracted from to get the average

const splitTheBill = (obj) => {
  const average =
    Object.values(obj).reduce((x, y) => x + y, 0) / Object.values(obj).length;
  Object.keys(obj).map((x, y) => {
    if (obj[x] < average) {
      return (obj[x] = +(obj[x] - average).toFixed(2));
    } else if (obj[x] == average) {
      return (obj[x] = 0);
    } else {
      return (obj[x] = +(obj[x] - average).toFixed(2));
    }
  });
  return obj;
};
// console.log(splitTheBill({ A: 20, B: 15, C: 10 })); // {A: 5, B: 0, C: -5}
// console.log(splitTheBill({ A: 40, B: 25, X: 10 })); // {A: 15, B: 0, X: -15}
// console.log(
//   splitTheBill({
//     A: -17.200000000000003,
//     B: -32.222222,
//     C: -47.2,
//     D: 95.8,
//     E: 0.7999999999999972,
//   })
// );

// Series of integers from m to n
// Task
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

// parameters two integers
// returns array
// examples
// pseudo code given two integers create an empty array, and then use a for loop to run from num1 to num2 inclusive

const generateIntegers = (num1, num2) => {
  let starter = [];
  for (let i = num1; i <= num2; i++) {
    starter.push(i);
  }
  return starter;
};

console.log(generateIntegers(2, 5)); // [2, 3, 4, 5]
