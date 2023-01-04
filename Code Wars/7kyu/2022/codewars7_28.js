// Conference Traveller
// Lucy loves to travel. Luckily she is a renowned computer scientist and gets to travel to international conferences using her department's budget.

// Each year, Society for Exciting Computer Science Research (SECSR) organizes several conferences around the world. Lucy always picks one conference from that list that is hosted in a city she hasn't been to before, and if that leaves her with more than one option, she picks the conference that she thinks would be most relevant for her field of research.

// Write a function conferencePicker that takes in two arguments:

// citiesVisited, a list of cities that Lucy has visited before, given as an array of strings.
// citiesOffered, a list of cities that will host SECSR conferences this year, given as an array of strings. citiesOffered will already be ordered in terms of the relevance of the conferences for Lucy's research (from the most to the least relevant).
// The function should return the city that Lucy should visit, as a string.

// Also note:

// You should allow for the possibility that Lucy hasn't visited any city before.
// SECSR organizes at least two conferences each year.
// If all of the offered conferences are hosted in cities that Lucy has visited before, the function should return 'No worthwhile conferences this year!' (Nothing in Haskell)

// parameters two arrays
// returns string
// examples
// pseudo code given two arrays filter the array of offered places checking to see that the element is not in the array holding visited places, use a conditional to check to see if the visited array is empty, or if the filtered array is empty, otherwise return the first element of the filtered array
const conferencePicker = (visited, offered) => {
  notVisited = offered.filter((x) => !visited.includes(x));
  if (visited.length == 0) {
    return offered[0];
  } else if (notVisited.length == 0) {
    return "No worthwhile conferences this year!";
  } else {
    return notVisited[0];
  }
};

// console.log(
//   conferencePicker(
//     [
//       "Mexico City",
//       "Johannesburg",
//       "Stockholm",
//       "Osaka",
//       "Saint Petersburg",
//       "London",
//     ],
//     ["Stockholm", "Paris", "Melbourne"]
//   )
// ); // 'Paris'
// console.log(
//   conferencePicker(
//     ["Buenos Aires", "Mexico City", "Johannesburg"],
//     ["Melbourne", "Moscow"]
//   )
// ); // 'Melbourne'
// console.log(
//   conferencePicker(
//     [
//       "Tokyo",
//       "Madrid",
//       "Melbourne",
//       "Sydney",
//       "Rio De Janeiro",
//       "Saint Petersburg",
//       "Brisbane",
//       "Paris",
//       "Houston",
//     ],
//     ["Sydney", "Chicago", "Paris"]
//   )
// ); // 'Chicago'
// console.log(
//   conferencePicker([], ["Philadelphia", "Osaka", "Tokyo", "Melbourne"])
// ); // 'Philadelphia'
console.log(
  conferencePicker(
    [
      "London",
      "Berlin",
      "Mexico City",
      "Melbourne",
      "Buenos Aires",
      "Hong Kong",
      "Madrid",
      "Paris",
    ],
    ["Berlin", "Melbourne"]
  )
); // 'No worthwhile conferences this year!'
