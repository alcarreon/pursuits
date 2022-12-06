// Rock Paper Scissors!

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// parameters 2 strings
// return string
// examples
// pseudo code check to see if both strings are the same otherwise use a series of conditionals to determine who won

function rps(p1, p2) {
  if (p1 == p2) {
    return "Draw!";
  } else if (p1 == "scissors" && p2 == "rock") {
    return "Player 2 won!";
  } else if (p1 == "scissors" && p2 == "paper") {
    return "Player 1 won!";
  } else if (p1 == "rock" && p2 == "scissors") {
    return "Player 1 won!";
  } else if (p1 == "rock" && p2 == "paper") {
    return "Player 2 won!";
  } else if (p1 == "paper" && p2 == "rock") {
    return "Player 1 won!";
  } else if (p1 == "paper" && p2 == "scissors") {
    return "Player 2 won!";
  }
}

// console.log(rps("scissors", "paper")); // "Player 1 won!"

// console.log(rps("scissors", "rock")); // "Player 2 won!"

// console.log(rps("paper", "paper")); // "Draw!"

// console.log(rps("paper", "scissors"));
