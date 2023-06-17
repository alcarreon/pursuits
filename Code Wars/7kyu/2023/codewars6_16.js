// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// parameters string
// return string
// examples
// pseudo code given a string split it into an array by # and return the first element

function removeUrlAnchor(str) {
  return str.split("#")[0];
}

console.log(removeUrlAnchor("www.codewars.com#about")); // 'www.codewars.com'

console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about")); // 'www.codewars.com/katas/?page=1'

console.log(removeUrlAnchor("www.codewars.com/katas/")); // 'www.codewars.com/katas/'
