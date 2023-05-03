// Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// parameters string
// return string
// examples
// pseudo code create a variable with the letters a-m, then split the string into an array and use filter to get the elements after m, get the length of the array and the length of the total string to find the ratio of errors

function printerError(str) {
  let good = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
  let total = str.split("").filter((x) => good.includes(x) == false).length;
  return `${total}/${str.length}`;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // '8/22'

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
); // '3/56'
