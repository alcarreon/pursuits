// Password Check - Binary to String

// Password Check - Binary to String
// A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

// Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;

// parameters array and string
// returns string
// examples
// pseudo code split the string and hold the array in a variable, then map through the array and convert the string into a number using String.fromCharCode and parseInt join the array to get a string and then use includes to check to see if the string is in the passwords array

const decodePass = (password, str) => {
  let strArr = str.split(" ");
  let newStr = strArr.map((x) => String.fromCharCode(parseInt(x, 2))).join("");
  return password.includes(newStr) ? newStr : false;
};

console.log(
  decodePass(
    ["password123", "admin", "admin1"],
    "01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011"
  )
); // 'password123'

// console.log(
//   decodePass(
//     ["password321", "admin", "admin1"],
//     "01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011"
//   )
// ); // false

// console.log(
//   decodePass(
//     ["password456", "pass1", "test12"],
//     "01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011"
//   )
// ); // false

// console.log(String.fromCharCode(parseInt('01110000',2)));
