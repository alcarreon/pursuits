// Miles per gallon to kilometers per liter
// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

// parameters integer
// return integer
// examples
// pseudo code create two variable to hold the contant conversion from gallons to liters and miles to kilometres, multiply the mpg by the product of dividing miles by gallons

let converter = (mpg) => {
  const convertedGallon = 4.54609188;
  const convertedMile = 1.609344;
  return +(mpg * (convertedMile / convertedGallon)).toFixed(2);
};

console.log(converter(10));
console.log(converter(20));
console.log(converter(30));
