// Color to Grayscale

// Grayscale colors in RGB color model are colors that have the same values for Red, Green and Blue. For example, #606060 is a grayscale color, while #FF0055 is not.

// In order to correctly convert a color to grayscale, one has to use luminance Y for Red, Green and Blue components. One can calculate luminance Y through the formula introduced in the NTSC standard:

// Y = 0.299 * R + 0.587 * G + 0.114 * B
// This formula closely represents the average person's relative perception of the brightness of red, green, and blue light.

// Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, convert it to grayscale #YYYYYY. The answer should be a string representing the color code in 6-digit hexidecimal notation in upper or lower case.

// Round the value of luminance Y to the closest integer.

// All inputs will be valid.

// parameters string
// return string
// examples
// pseudo code split the string up into 4 variables representing Red, Green, Blue, and Yellow, use parseInt to convert it into hexadecimal, and then find the final converted y by using the formual provided, use a string literal to display the result
function rgbToGrayscale(color) {
  const R = parseInt(color.slice(1, 3), 16);
  const G = parseInt(color.slice(3, 5), 16);
  const B = parseInt(color.slice(5, 7), 16);
  const Y = Math.round(0.299 * R + 0.587 * G + 0.114 * B);
  return `#${Y.toString(16).padStart(2, "0").repeat(3)}`;
}

console.log(rgbToGrayscale("#FFFFFF")); // '#FFFFFF'

console.log(rgbToGrayscale("#0000FF")); // '#1D1D1D'

console.log(rgbToGrayscale("#00FF00")); // '#969696'

console.log(rgbToGrayscale("#FF0000")); // '#4C4C4C'

console.log(rgbToGrayscale("#000000")); // '#000000'
