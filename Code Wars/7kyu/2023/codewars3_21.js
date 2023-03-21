// The Pony Express
// A History Lesson
// The Pony Express was a mail service operating in the US in 1859-60.

// Pony Express
// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

// How it worked
// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

// parameters array
// return integer
// examples
// pseudo code create a variable to track the number of riders, and another variable to track the distance, iterate over the array and check to see if the distance is greater than 100, if it is add 1 to the rider variable and update the distance variable, otherwise add the current element to the total distance

function riders(station) {
  let rider = 1;
  let distance = 0;
  for (let i = 0; i < station.length; i++) {
    if (distance + station[i] > 100) {
      rider += 1;
      distance = station[i];
    } else {
      distance += station[i];
    }
  }
  return rider;
}

console.log(riders([18, 15])); // 1

console.log(riders([43, 23, 40, 13])); // 2

console.log(riders([33, 8, 16, 47, 30, 30, 46])); // 3

console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49])); // 4

console.log(riders([6, 27, 26, 43, 24, 50, 29, 35]));
