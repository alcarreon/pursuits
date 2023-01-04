// Barking mad
// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

// parameters function
// return string
// examples
// pseudo code use prototype method to create the bark method for all dogs

function Dog(breed) {
  this.breed = breed;
}
Dog.prototype.bark = function () {
  return "Woof";
};

var snoopy = new Dog("Beagle");

// snoopy.bark = function () {
//   return "Woof";
// };

var scoobydoo = new Dog("Great Dane");

console.log(snoopy.bark());
console.log(scoobydoo.bark());
