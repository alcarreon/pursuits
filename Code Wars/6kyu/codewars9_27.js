// Shopping List

// Calculate the cost of a shopping list by writing a function. The function takes an argument which is an array consisting of sub-arrays. For example:

// shoppingListCost([["Orange Juice", 2],["Chocolate", 4],["Pears", 8]])
// The input array includes sub arrays containing the name and quantity of each item being purchased. Already existing in the global scope is an object which gives some information regarding the shopping items:

// var groceries = {
//   "Orange Juice": {
//       "price" : 1.5,
//       "discount": 10,
//       "bogof": false
//   },

//   "Chocolate": {
//       "price" : 2,
//       "discount" : 0,
//       "bogof": true
//   },

//   // more items...
// }

// This object contains the price of the item, the discount currently being offered on that item, and whether the item is currently "buy one get one free" (meaning for every item purchased, one of the same item is free).

// Return the cost of the shopping list. If the input array contains no items, return zero. Round the answer to 2 decimal places.

// All input arrays will be valid and contain items included in the global groceries object. Each item will only appear once in any input array.

// Examples

// shoppingListCost([["Orange Juice", 2],["Chocolate", 4]])
// returns 6.7

// shoppingListCost([["Chocolate", 5],["Orange Juice", 15]])
// returns 26.25

// { 'Orange Juice': { price: 1.5, discount: 10, bogof: false },
//   Chocolate: { price: 2, discount: 0, bogof: true },
//   Sweetcorn: { price: 4, discount: 20, bogof: true },
//   Apples: { price: 6, discount: 0, bogof: false },
//   Pears: { price: 2, discount: 50, bogof: false } }

// parameters array
// return number
// examples
// pseudo code given an array create a variable to hold the result then iterate through the array, create a variable to hold the price, percent, bogof, and quantity, if the item has bogof the new quantity is quantity divided by 2, then mulityply the quantity, price, and perecent together and divide by 100, finally round to 2 decimal places

let groceries = {
  "Orange Juice": { price: 1.5, discount: 10, bogof: false },
  Chocolate: { price: 2, discount: 0, bogof: true },
  Sweetcorn: { price: 4, discount: 20, bogof: true },
  Apples: { price: 6, discount: 0, bogof: false },
  Pears: { price: 2, discount: 50, bogof: false },
};

const shoppingListCost = (arr) => {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    var price = groceries[arr[i][0]].price;
    var percent = 100 - groceries[arr[i][0]].discount;
    var bogof = groceries[arr[i][0]].bogof;
    var quantity = arr[i][1];
    if (bogof) {
      quantity = Math.ceil(quantity / 2);
    }
    result += (quantity * price * percent) / 100;
  }
  return Number(Math.round(result + "e2") + "e-2");
};

// console.log(
//   shoppingListCost([
//     ["Chocolate", 3],
//     ["Apples", 8],
//     ["Orange Juice", 15],
//     ["Pears", 1],
//   ])
// ); // 73.25

// console.log(
//   shoppingListCost([
//     ["Sweetcorn", 12],
//     ["Pears", 6],
//     ["Apples", 5],
//   ])
// ); // 55.2

// console.log(
//   shoppingListCost([
//     ["Pears", 4],
//     ["Chocolate", 87],
//     ["Sweetcorn", 3],
//   ])
// ); // 98.4

// console.log(shoppingListCost([["Orange Juice", 100]])); // 135
