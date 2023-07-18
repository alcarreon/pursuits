// Upstream/Downstream

// Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

// Input

// You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

// Output

// The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

// parameters 2 integers and a string
// return integer
// examples
// pseudo code split the string by spaces and create variables to hold the direction, and the number, use a conditional to check whether the integer from the stream needs to be added or subtracted from the speed

function time(dist, speed, stream) {
  let direction = stream.split(" ")[0];
  let directionSpeed = stream.split(" ")[1];
  if (direction == "Downstream") {
    let total = dist / (speed + +directionSpeed);
    return total % 1 == 0 ? total : +total.toFixed(2);
  } else {
    let total = dist / (speed - +directionSpeed);
    return total % 1 == 0 ? total : +total.toFixed(2);
  }
}

console.log(time(24, 10, "Downstream 2")); // 2

console.log(time(24, 14, "Upstream 2")); // 2

console.log(time(54, 28, "Downstream 3")); // 1.74
