// L1: Bartender, drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// parameters string
// return string
// examples
// pseudo code create an object holding the keys of the professions and the value of the drinks, check to see if the key is not a part of the object and return beer otherwise use bracket notation to access the object

function getDrinkByProfession(str) {
  let drinkList = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };
  if (!drinkList[str.toLowerCase()]) {
    return "Beer";
  } else {
    return drinkList[str.toLowerCase()];
  }
}

// console.log(getDrinkByProfession("jabrOni")); // "Patron Tequila"
// console.log(getDrinkByProfession("scHOOl counselor")); // "Anything with Alcohol"
// console.log(getDrinkByProfession("prOgramMer")); // "Hipster Craft Beer"
// console.log(getDrinkByProfession("bike ganG member")); // "Moonshine"
// console.log(getDrinkByProfession("poLiTiCian")); // "Your tax dollars"
// console.log(getDrinkByProfession("rapper")); // "Cristal"
// console.log(getDrinkByProfession("pundit")); // "Beer"
// console.log(getDrinkByProfession("Pug")); // "Beer"
