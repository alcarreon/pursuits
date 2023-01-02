// Help the Elite Squad of Brazilian forces BOPE

// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.



// parameters array
// return integer
// examples
// pseudo code create an object holding each gun and the number of builts each can fire, then create a variable to hold the result of taking the number of streets times 3 finally divide the variable by the number of bullets the gun can hold rounding up to the next whole number

function magNumber(arr) {
  let guns = { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 };
  let fired = arr[1] * 3;
  return Math.ceil(fired / guns[arr[0]]);
}

console.log(magNumber(["PT92", 6])); // 2

console.log(magNumber(["M4A1", 8])); // 1

console.log(magNumber(["M16A2", 19])); // 2

console.log(magNumber(["PSG1", 31])); // 19

console.log(magNumber(["PT92", 19])); // 4
