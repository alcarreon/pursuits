// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

let well = (arr) => {
  let totalGood = arr.filter((x) => x === "good").length;
  if (totalGood === 0) {
    return "Fail!";
  } else if (totalGood <= 2) {
    return "Publish!";
  } else if (totalGood > 2) {
    return "I smell a series!";
  }
};

// console.log(well(["bad", "bad", "bad"])); // 'Fail'
// console.log(well(["good", "bad", "bad", "bad", "bad"])); // 'Publish!'
// console.log(
//   well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
// ); //'I smell a series!'

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

let fixTheMeerkat = (arr) => arr.reverse();

console.log(fixTheMeerkat(["tail", "body", "head"])); // ["head", "body", "tail"]
console.log(fixTheMeerkat(["tails", "body", "heads"])); // ["heads", "body", "tails"]
console.log(fixTheMeerkat(["bottom", "middle", "top"])); // ["top", "middle", "bottom"]
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"])); // ["upper legs", "torso", "lower legs"]
console.log(fixTheMeerkat(["ground", "rainbow", "sky"])); // ["sky", "rainbow", "ground"]
