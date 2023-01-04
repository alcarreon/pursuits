// Char Code Calculation
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// parameters string
// returns number
// examples
// pseudo code given a string iterate through it adding the charcode to an empty variable then iterate through the variable holding the char codes and if the value is equal to seven add six to an empty variable representing the difference

const calc = (x) => {
  let str = "";
  let holder = 0;
  for (let i = 0; i < x.length; i++) {
    str += String(x.charCodeAt(i));
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "7") {
      holder += 6;
    }
  }
  return holder;
};
console.log(calc("ABC"));
console.log(calc("abcdef")); // 6
// console.log(calc("ifkhchlhfd")); // 6
console.log(calc("aaaaaddddr")); // 30
console.log(calc("jfmgklf8hglbe")); // 6
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")); // 96
