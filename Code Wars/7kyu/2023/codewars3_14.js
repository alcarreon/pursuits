// Find the Capitals

// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

// The method should return an array of sentences declaring the state or country and its capital.

// Examples
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

// parameters array of objects
// return array
// examples
// pseudo code given an array of objects iterate over the array and use a string template to display either the state or country with its capital

let state_capitals = [{ state: "Maine", capital: "Augusta" }];

let country_capitals = [{ country: "Spain", capital: "Madrid" }];

let mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];

let capital = (caps) => {
  return caps.map(
    (x) => `The capital of ${x.state || x.country} is ${x.capital}`
  );
};

console.log(capital(state_capitals)[0]); // "The capital of Maine is Augusta"

console.log(capital(country_capitals)[0]); // "The capital of Spain is Madrid"

console.log(capital(mixed_capitals)[1]); // "The capital of Spain is Madrid"
