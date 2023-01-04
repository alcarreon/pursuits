// Bumps in the Road

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// parameters str
// returns string
// examples
// pseudo code given a string split it by the bumps ('n') and check the length of the array if it is over 16 the car is dead otherwise it is safe

const bump = (str) => (str.split("n").length > 16 ? "Car Dead" : "Woohoo!");

// console.log(bump("n")); // "Woohoo!"
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // "Car Dead"
// console.log(bump("______n___n_")); // // "Woohoo!"
// console.log(bump("_n_n_n_n____nn_nnn_n_n__n_n_nn_"));

// Alphabet war

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// parameters string
// results string
// examples
// pseudo code given a string create an array with the possible results of three elements, then destructure the string and reduce it adding or subtracting depending on which side the characters lines up with, finally use the product of that to determine which side one if it is possitive left side wins if it is negative right side wins

alphabetWar = (fight) =>
  ["Right side wins!", "Let's fight again!", "Left side wins!"][
    Math.sign(
      [...fight].reduce(
        (r, cv) => r + "sbpw".indexOf(cv) - "zdqm".indexOf(cv),
        0
      )
    ) + 1
  ];

console.log(alphabetWar("z")); // "Right side wins!"
console.log(alphabetWar("zdqmwpbs")); // "Let's fight again!"
console.log(alphabetWar("zzzzs")); // "Right side wins!"
console.log(alphabetWar("wwwwww")); // "Left side wins!"
