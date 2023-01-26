// What's the real floor?

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// parameters integer
// return integer
// examples
// pseudo code check to see that the floor is between 0 and 1 and return 0 then check to see that the floor is less than 13 and subract one, finally subtract 2 from the floor number if the floor is greater than 13

function getRealFloor(floor) {
  if (floor >= 0 && floor <= 1) {
    return 0;
  } else if (floor < 0) {
    return floor;
  } else if (floor < 13) {
    return floor - 1;
  } else {
    return floor - 2;
  }
}

console.log(getRealFloor(1)); // 0
console.log(getRealFloor(5)); // 4
console.log(getRealFloor(15)); // 13
console.log(getRealFloor(-2)); // -2
