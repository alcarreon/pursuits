// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// parameters string
// return string
// examples
// pseudo code check to see if the length of the string is less than 4 if it is return the entire string, otherwise use a string template to repeat # and then slice the last 4 charaters of the original string

function maskify(str) {
  return str.length <= 4
    ? str
    : `${"#".repeat(str.length - 4)}${str.slice(-4)}`;
}

console.log(maskify("4556364607935616")); // '############5616'

console.log(maskify("1")); // '1'

console.log(maskify("11111")); // '#1111'
