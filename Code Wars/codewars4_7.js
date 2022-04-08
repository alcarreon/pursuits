// Calculate BMI
let bmi = (weight, height) => {
  bmiCalc = weight / height ** 2;
  if (bmiCalc <= 18.5) {
    return "Underweight";
  } else if (bmiCalc <= 25.0) {
    return "Normal";
  } else if (bmiCalc <= 30.0) {
    return "Overweight";
  } else if (bmiCalc > 30) {
    return "Obese";
  }
};

// console.log(bmi(80, 1.8));

// Calculate average
let find_average = (arr) =>
  arr.length > 0 ? arr.reduce((x, y) => x + y, 0) / arr.length : 0;
// console.log(find_average([1, 1, 1]));
// console.log(find_average([1, 2, 3]));
// console.log(find_average([1, 2, 3, 4]));
// console.log(find_average([]));

// Beginner - Reduce but Grow
let grow = (arr) => arr.reduce((x, y) => x * y, 1);

// console.log(grow([1, 2, 3]));
// console.log(grow([4, 1, 1, 1, 4]));
// console.log(grow([2, 2, 2, 2, 2, 2]));
