// Tea for two

// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'
// tea42('2u2u') //should return 'tutu'

// parameters integer
// returns string
// examples
// pseudo code given an integer convert it to a string and split it by each character, iterate over the array and check each element to see if it is a 2 if it is convert it into a t otherwise return the character, finally join the array back into a string

function tea42(num) {
  return num
    .toString()
    .split("")
    .map((x) => (x === "2" ? (x = "t") : x))
    .join("");
}

console.log(tea42(2)); // 't'

console.log(tea42("2")); // 't'

console.log(tea42(102)); // '10t'

console.log(tea42("m2")); // 'mt'

console.log(tea42("pre2ty")); // 'pretty'
