// Fuel Calculator: Total Cost
// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

// parameters two integers
// return integer
// examples
// pseudo code use a conditional to check where the number of litres falls between

function fuelPrice(litres, priceLitre) {
  if (litres > 2 && litres < 4) {
    return +(litres * priceLitre - 0.05 * litres).toFixed(2);
  } else if (litres < 6 && litres >= 4) {
    return +(litres * priceLitre - 0.1 * litres).toFixed(2);
  } else if (litres < 8 && litres >= 6) {
    return +(litres * priceLitre - 0.15 * litres).toFixed(2);
  } else if (litres < 10 && litres >= 8) {
    return +(litres * priceLitre - 0.2 * litres).toFixed(2);
  } else if (litres >= 10) {
    return +(litres * priceLitre - 0.25 * litres).toFixed(2);
  }
}

console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.40
console.log(fuelPrice(5, 5.6)); // 27.50
