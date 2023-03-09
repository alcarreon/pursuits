// Speed Control

// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// With the above data your function gps(s, x) should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

//  (3600 * delta_distance) / s.

// parameters interger, array
// return integer
// examples
// pseudo code create a variable to hold an empty array, then check to see if the array is empty or that the array only has a single element and it is 0, otherwise use a for loop to iterate over the array and get the time delta, use absolute value and floor to round down to the proper integer

let gps = (s, x) => {
  let holder = [];
  if (x.length == 0 || (x.length == 1 && x[0] == 0)) {
    return 0;
  } else {
    for (let i = 0; i < x.length - 1; i++) {
      holder.push(Math.abs((3600 * (x[i] - x[i + 1])) / s));
    }
    return Math.floor(Math.max(...holder));
  }
};

console.log(gps(19, [0]));

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])); //74

console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])); // 41

console.log(
  gps(
    12,
    [
      0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31,
      2.52, 3.25,
    ]
  )
); // 219

console.log(
  gps(
    20,
    [
      0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64,
      2.88, 3.12, 3.36, 3.6, 3.84,
    ]
  )
); // 80

console.log(
  gps(
    14,
    [
      0.0, 0.01, 0.36, 0.6, 0.84, 1.05, 1.26, 1.47, 1.68, 1.89, 2.1, 2.31, 2.52,
      2.73, 2.94, 3.15,
    ]
  )
); // 90

console.log(
  gps(17, [0.0, 0.02, 0.36, 0.54, 0.72, 0.9, 1.08, 1.26, 1.44, 1.62, 1.8])
); // 72

console.log(gps(19, [])); // 0

console.log(gps(19, [0, 0]));
