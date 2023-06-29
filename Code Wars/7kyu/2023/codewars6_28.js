// Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product

// Count the number of exclamation marks and question marks, return the product.

// Examples
// Product("") == 0
// product("!") == 0
// Product("!ab? ?") == 2
// Product("!!") == 0
// Product("!??") == 2
// Product("!???") == 3
// Product("!!!??") == 6
// Product("!!!???") == 9
// Product("!???!!") == 9
// Product("!????!!!?") == 20

// parameters string
// return integer
// examples
// pseudo code create a variable which is the string sply by each ! take the length and subtract 1 do the same for ? then return the product of the two variables

function product(str) {
  excs = str.split("!").length - 1;
  ques = str.split("?").length - 1;
  return excs * ques;
}

console.log(product("")); // 0

// console.log(product("!")); // 0

// console.log(product("!!")); // 0

// console.log(product("!??")); // 2

// console.log(product("!???")); // 3

// console.log(product("!!!??")); // 6

// console.log(product("!!!???")); // 9

// console.log(product("!???!!")); // 9

// console.log(product("!ab? ?")); // 2
