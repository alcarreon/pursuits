// Converting 12-hour time to 24-hour time

// Converting a normal (12-hour) time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function named "to24hourtime", and you will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// parameters two integers and a string
// return string
// examples
// pseudo code create helper functions to know how to pad the hour based off of whether it is a single digit or two digits, do the same thing with the minutes, finally use conditionals to check to see if the period is am and 12, if the period is just am, if the period is am and the hour is 12, and finally the rest of the results
function hourFinder(hour) {
  if (hour.toString().length == 2) {
    return hour;
  } else {
    return `0${hour}`;
  }
}

function minuteFinder(minute) {
  if (minute.toString().length == 2) {
    return minute;
  } else {
    return `0${minute}`;
  }
}

function to24hourtime(hour, min, period) {
  let holder = "";
  if (period == "am" && hour == 12) {
    holder += `00${minuteFinder(min)}`;
  } else if (period == "am") {
    holder += `${hourFinder(hour)}${minuteFinder(min)}`;
  } else if (period == "pm" && hour == 12) {
    holder += hour;
    holder += minuteFinder(min);
  } else {
    holder += hour + 12;
    holder += minuteFinder(min);
  }
  return holder;
}

console.log(to24hourtime(1, 0, "am")); // "0100"

console.log(to24hourtime(1, 0, "pm")); // "1300"

console.log(to24hourtime(12, 0, "am")); // "0000"

console.log(to24hourtime(12, 5, "am")); // 0005

console.log(to24hourtime(12, 50, "am")); // 0050

console.log(to24hourtime(12, 0, "pm")); // "1200"

console.log(to24hourtime(6, 30, "am")); // "0630"

console.log(to24hourtime(9, 45, "pm")); // "2145"
