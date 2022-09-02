// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// parameters number
// return string
// examples
// pseudo code given a number create an empty variable to hold the result, us a for loop to iterate 1-9 check to see if i is less than 9 and add a break after it otherwise do not

const multiTable = (num) => {
  holder = "";
  for (let i = 1; i <= 10; i++) {
    i <= 9
      ? (holder += `${i} * ${num} = ${i * num}\n`)
      : (holder += `${i} * ${num} = ${i * num}`);
  }
  return holder;
};

console.log(multiTable(5)); // '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'

// console.log(multiTable(1)); // '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'
