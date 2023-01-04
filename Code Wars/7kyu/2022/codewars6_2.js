// Multiply characters

// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why

// parameters number
// returns string
// examples
// pseudo code create an empty string that will be concatenated to everytime the for loop runs, in the for loop check to see that i is less than the number provided and concatenate hue every time that it is ran

const spam = (num) => {
  let starter = "";
  for (let i = 1; i <= num; i++) {
    starter += "hue";
  }
  return starter;
};

// console.log(spam(1)); // hue
// console.log(spam(6)); // huehuehuehuehuehue
// console.log(spam(14)); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

// Last
// Find the last element of the given argument(s).

// parameters array
// returns last element of array
// examples
// psuedo code given an array destructure it to the base elements, then if you can go to the last element find it by subtracting one from the length of the array otherwise show last

const last = (...list) =>
  ((last) => last[last.length - 1] || last)(list[list.length - 1]);

console.log(last([1, 2, 3, 4])); // =>  4
console.log(last("xyz")); // => "z"
console.log(last(1, 2, 3, 4)); // =>  4
console.log(last(1, "b", 3, "d", 5));
