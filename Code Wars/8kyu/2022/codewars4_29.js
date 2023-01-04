// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

let removeEveryOther = (arr) => arr.filter((el, index) => index % 2 == 0);

// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); // ['Hello', 'Hello Again']
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
// console.log(removeEveryOther([[1, 2]])); // [[1, 2]]
// console.log(removeEveryOther([["Goodbye"], { Great: "Job" }])); // [['Goodbye']]

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

let twoSort = (arr) => {
  first = arr.sort()[0];
  return first
    .split("")
    .map((el, index) => {
      if (first.length - 1 === index) {
        return el;
      } else {
        return el + "***";
      }
    })
    .join("");
};

// console.log(
//   twoSort([
//     "x",
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// ); // 'b***i***t***c***o***i***n'
// console.log(
//   twoSort([
//     "turns",
//     "out",
//     "random",
//     "test",
//     "cases",
//     "are",
//     "easier",
//     "than",
//     "writing",
//     "out",
//     "basic",
//     "ones",
//   ])
// ); // 'a***r***e'

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

let howMuchILoveYou = (num) => {
  let options = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return options[(num - 1) % options.length];
};

console.log(howMuchILoveYou(7)); // "I love you"
// console.log(howMuchILoveYou(3)); // "a lot"
// console.log(howMuchILoveYou(6)); // "not at all"
console.log(howMuchILoveYou(336)); // 'not at all'
