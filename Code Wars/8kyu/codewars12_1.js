// Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// parameters integer
// return string
// examples
// pseudo code check to see if the integer is less than 10

function hoopCount(n) {
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}

console.log(hoopCount(3)); // "Keep at it until you get it"

console.log(hoopCount(11)); // "Great, now move on to tricks"
