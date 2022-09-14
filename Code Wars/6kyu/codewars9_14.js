// Diagnosing Hypertension
// The 2020 International Society of Hypertension Practice Guidelines describe raised blood pressure (hypertension) and its complications as the leading cause of death in the world at the time of publication. Blood pressure is the measure of the heart's pumping pressure against the blood vessel walls. It is recorded as a systolic pressure over a diastolic pressure (for example '120/80 mmHg') which represent the maximum and minimum pressure in the vessels between heartbeats.

// For the purpose of this kata, hypertension can be diagnosed when a patient's blood pressure meets any of the three criteria below:

// Average of all measured systolic pressures >= 140 mmHg. Must have minumum of 2 measurements.
// Average of all measured diastolic presures >= 90 mmHg. Must have minimum of 2 measurements.
// Any one measurement with systolic pressure >= 180 mmHg AND diastolic pressure >= 110 mmHg
// You are given a list, patients, in which each element represents a patient. Each patient/element consists of a list of strings (representing all measurements of a patient's blood pressure) in the format "s/d", where s is the systolic pressure and d the diastolic, both in mmHg. Systolic and diastolic numbers will always be whole numbers.

// Return the number of patents that meet any of the above hypertension definitions.

// Example:

// Input:
// [
// ["130/90","140/94"],
// ["160/110"],
// ["200/120"],
// ["150/94","140/90","120/90"],
// ["140/94","140/90","120/80","130/84"]
// ]

// Output:
// 3

// # patients at index 0, 2, and 3 are hypertensive
// Constraints: 0 < length of patients list <= 10000

// 0 < length of element within patients <= 30

// parameters nested array
// return number
// examples
// pseudo code create a function to handle the individual patient measurments first, start by making two empty variables one for s and d, and then create another variable which holds the length of the measurments, iterate over the measurments by spliting the string by each '/' and assigning the first element to s and the second to d, also check to see if any one measurment is has an s greater than 180 or a d greater than 110, add up the values, finally check to make sure there are more than two measurments and that either the s is greater than 140 or the d is greater than 90, finally create another function to iterate through the array and run the helper function for each element reduce the result

const is_hypertensive = (patient) => {
  let len = patient.length,
    sum_s = 0,
    sum_d = 0;

  for (let test of patient) {
    let [s, d] = test.split("/").map(Number);

    if (s >= 180 && d >= 110) return true;

    sum_s += s;
    sum_d += d;
  }

  return len >= 2 && (sum_s / len >= 140 || sum_d / len >= 90);
};

const hypertensive = (patients) => {
  patients.reduce((count, patient) => count + is_hypertensive(patient), 0);
};

console.log(
  hypertensive([
    ["130/80", "140/94"],
    ["160/110"],
    ["150/80"],
    ["150/92", "140/90", "138/84"],
    ["140/94", "140/90", "120/80"],
  ])
); // 1

// console.log(
//   hypertensive([
//     ["130/90", "140/94"],
//     ["160/110"],
//     ["150/80"],
//     ["150/92", "140/90", "120/80"],
//     ["140/94", "140/90", "120/80"],
//   ])
// ); // 1

// console.log(
//   hypertensive([
//     ["130/90", "140/84"],
//     ["160/110"],
//     ["200/120"],
//     ["150/92", "140/90", "120/80"],
//     ["140/94", "140/90", "120/80"],
//   ])
// ); // 1

// console.log(
//   hypertensive([
//     ["130/90", "140/94"],
//     ["160/110"],
//     ["200/120"],
//     ["150/94", "140/90", "120/90"],
//     ["140/94", "140/90", "120/80"],
//   ])
// ); // 3
