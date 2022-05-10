// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

let shark = (pontoonDist, sharkDist, youSpeed, sharkSpeed, dolphin) => {
  if (dolphin) {
    sharkSpeed /= 2;
  }
  return pontoonDist / youSpeed < sharkDist / sharkSpeed
    ? "Alive!"
    : "Shark Bait!";
};

// console.log(shark(12, 50, 4, 8, true)); // 'Alive'
// console.log(shark(7, 55, 4, 16, true)); //'Alive!'
// console.log(shark(24, 0, 4, 8, true)); // 'Shark Bait!'

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// let capitalizeWord = (word) => {
//   let splitWord = word.split("");
//   return splitWord.map((el, index) => {
//     if (index == 0) {
//       return el.toUpperCase();
//     } else {
//         return el
//     }
//   }).join('');
// };

let capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

// console.log(capitalizeWord("word")); // 'Word'
// console.log(capitalizeWord("i")); // 'I'
// console.log(capitalizeWord("glasswear")); // 'Glasswear'

// Write a function that returns a string in which firstname is swapped with last name.

let nameShuffler = (str) => str.split(" ").reverse().join(" ");

console.log(nameShuffler("john McClane")); // 'McClane john'
