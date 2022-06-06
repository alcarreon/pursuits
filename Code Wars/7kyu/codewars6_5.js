// Sort Out The Men From Boys

// Scenario
// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd

// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists.
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

// parameters array
// returns array
// examples
// pseudo code given an array use set to remove duplicates, then make a varaible for men which are even numbers and use the sort method to sort them in ascending order, do the same for boys but checking that the absolute value of the integer is odd

const menFromBoys = (arr) => {
  let men = [...new Set(arr)].filter((x) => x % 2 == 0).sort((x, y) => x - y);
  let boys = [...new Set(arr)]
    .filter((x) => Math.abs(x) % 2 == 1)
    .sort((x, y) => y - x);
  return men.concat(boys);
};

// console.log(menFromBoys([7, 3, 14, 17])); // [14,17,7,3]
// console.log(menFromBoys([2, 43, 95, 90, 37])); // [2,90,95,43,37]
// console.log(menFromBoys([20, 33, 50, 34, 43, 46])); // [20,34,46,50,43,33]
// console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85])); // [72,76,82,100,91,85]
console.log(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1])); // [2,10,17,15,1]
console.log(menFromBoys([-32, -39, -35, -41]));

// Convert an array of strings to array of numbers
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

const toNumberArray = (arr) =>
  arr.map((x) => {
    if (x % 1 == 0) {
      return parseInt(x, 10);
    } else {
      return parseFloat(x, 10);
    }
  });

console.log(toNumberArray(["1.1", "2.2", "3.3"]));
