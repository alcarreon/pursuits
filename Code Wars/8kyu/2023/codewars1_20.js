// Welcome to the City

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// parameters array, two strings
// return string
// examples
// pseudo code create a variable to hold the string created by seperating the array, then use a string literal to combine all the strings

function sayHello(arr, city, state) {
  let name = arr.join(" ");
  return `Hello, ${name}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona")); // 'Hello, John Smith! Welcome to Phoenix, Arizona!'

console.log(
  sayHello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois")
); // 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
