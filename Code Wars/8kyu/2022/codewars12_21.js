// Duck Duck Goose

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// parameters object integer
// return string
// examples
// pseudo code check to see that the goose is less than or equal to 10 and then subtract 1 from it to account for the zero based indexing of array, if it is larger than 10 recursively subtract the length of players from goose

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  if (goose <= 10) {
    return players[goose - 1].name;
  } else {
    return duckDuckGoose(players, goose - players.length);
  }
}

// console.log(duckDuckGoose(players, 1)); // 'a'

// console.log(duckDuckGoose(players, 3)); // 'c'

// console.log(duckDuckGoose(players, 30)); // 'z'

// console.log(duckDuckGoose(players, 18)); // 'g'
