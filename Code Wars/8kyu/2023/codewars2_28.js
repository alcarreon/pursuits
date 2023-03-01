// Is your period late?
// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// parameters date objects and integer
// return boolean
// examples
// pseudo code subtract the date objects to get the time in miliseconds and then convert that into days and check to see if it is less than the length of the cycle

let periodIsLate = (last, today, length) => {
  return (today - last) / (1000 * 60 * 60 * 24) <= length ? false : true;
};

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)); // false

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)); // true
