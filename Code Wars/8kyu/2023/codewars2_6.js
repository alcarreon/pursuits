// Grasshopper - Terminal game combat function

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
// parameters two integers
// return integer
// examples
// pseudo code check to see that the product of the division is not negative

function combat(health, dmg) {
  return health - dmg >= 0 ? health - dmg : 0;
}

console.log(combat(100, 5)); // 95

console.log(combat(92, 8)); // 84

console.log(combat(20, 30)); // 0
