// Snail crawls up

// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

// Your function takes three arguments:

// The height of the column (meters)
// The distance that the snail crawls during the day (meters)
// The distance that the snail slides down during the night (meters)
// Calculate number of day when the snail will reach the top of the column.

// parameters 3 integers
// return integer
// examples
// pseudo code create a variable to hold the day, the distance per day by subtracting the distance from night, and a variable for the first day, use a loop to compare distance with the height of the column adding the distance per day each time it goes through and add 1 to the days variable return the days variable

function snail(column, day, night) {
  let distance = day;
  let distancePerDay = day - night;
  let days = 1;

  while (distance < column) {
    distance += distancePerDay;
    days++;
  }
  return days;
}

console.log(snail(3, 2, 1)); // 2

console.log(snail(10, 3, 1)); // 5

console.log(snail(10, 3, 2)); // 8

console.log(snail(100, 20, 5)); // 7

console.log(snail(5, 10, 3)); // 1
