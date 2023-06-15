// Unscrambled eggs

// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"

// split the array by egg and then join it back together

function unscrambleEggs(str) {
  return str.split("egg").join("");
}

console.log(unscrambleEggs("ceggodegge heggeregge")); // "code here"

console.log(unscrambleEggs("FeggUNegg KeggATeggA")); // "FUN KATA"
