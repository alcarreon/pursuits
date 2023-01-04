// Return the day

// parameters number
// return string
// examples
// pseudo code create an array represeting the days of the week, use a conditional to check that the number is not greater than 7 or less than 1 if it is return wrong, else access the array using bracket notation subtracting 1 from the number

function whatday(num) {
  console.log(num);
  weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (num > 7 || num < 1) {
    return "Wrong, please enter a number between 1 and 7";
  } else {
    return weekdays[num - 1];
  }
}

console.log(whatday(1)); // 'Sunday'
console.log(whatday(2)); // 'Monday'
console.log(whatday(3)); // 'Tuesday'
console.log(whatday(8)); // "Wrong, please enter a number between 1 and 7"
