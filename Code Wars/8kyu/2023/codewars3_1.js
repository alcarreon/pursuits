// Do I get a bonus?
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

// parameters integer and boolean
// return string
// example
// pseudo code check to see if bonus is set to true if it is using a string literal display the pound sign and the salary multiplied by 10

let bonusTime = (salary, bonus) =>
  bonus == true ? `\u00A3${salary * 10}` : `\u00A3${salary}`;

console.log(bonusTime(10000, true)); // '£100000'
console.log(bonusTime(10000, false)); // '£10000'
console.log(bonusTime(2, true)); // '£20'
