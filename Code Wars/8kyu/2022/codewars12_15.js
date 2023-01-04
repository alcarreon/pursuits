// Holiday VIII - Duty Free

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

// parameters 3 integers
// return integer
// example
// pseudo code to find the dollar amount from the norm and discount multiply the norm by the product of discount divided by 100 then divide the cost of the holiday by the dollar amount roudning down using floor

function dutyFree(norm, discount, hol) {
  let dollar = norm * (discount / 100);
  return Math.floor(hol / dollar);
}

console.log(dutyFree(10, 10, 500));

console.log(dutyFree(12, 50, 1000)); // 166

console.log(dutyFree(17, 10, 500)); // 294

console.log(dutyFree(24, 35, 3000)); // 357
