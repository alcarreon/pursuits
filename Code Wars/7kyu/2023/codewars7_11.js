// Sort Santa's Reindeer

// Happy Holidays fellow Code Warriors!
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order
// Examples
// For this input:

// [
//   "Dasher Tonoyan",
//   "Dancer Moore",
//   "Prancer Chua",
//   "Vixen Hall",
//   "Comet Karavani",
//   "Cupid Foroutan",
//   "Donder Jonker",
//   "Blitzen Claus"
// ]
// You should return this output:

// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan",
//   "Vixen Hall",
//   "Donder Jonker",
//   "Comet Karavani",
//   "Dancer Moore",
//   "Dasher Tonoyan",
// ]

// parameters array
// return array
// examples
// pseudo code iterate over the array spliting the elements by spaces, then iterate over that array comparing the second elements to sort them alphabetically, finally iterate over the array again joining it back into its original format

function sortReindeer(arr) {
  let splitArr = arr.map((x) => x.split(" "));
  return splitArr
    .sort((x, y) => x[1].localeCompare(y[1]))
    .map((x) => x.join(" "));
}

console.log(
  sortReindeer([
    "Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    "Vixen Hall",
    "Comet Karavani",
    "Cupid Foroutan",
    "Donder Jonker",
    "Blitzen Claus",
  ])
); // ["Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall", "Donder Jonker", "Comet Karavani", "Dancer Moore", "Dasher Tonoyan"]
