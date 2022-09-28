// Address Book by State

// Given a string with friends to visit in different states:

// ad3="John Daggett, 341 King Road, Plymouth MA
// Alice Ford, 22 East Broadway, Richmond VA
// Sal Carpenter, 73 6th Street, Boston MA"
// we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

// Massachusetts
// .....^John Daggett 341 King Road Plymouth Massachusetts
// .....^Sal Carpenter 73 6th Street Boston Massachusetts
// ^Virginia
// .....^Alice Ford 22 East Broadway Richmond Virginia
// Spaces not being always well seen, in the above result ^ means a white space.

// The resulting string (when not printed) will be:

// "Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"
// or (the separator is \n or \r\n depending on the language)

// "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"
// Notes
// There can be a blank last line in the given string of addresses.
// The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
// You can see another example in the "Sample tests".
// States
// For the lazy ones:

// 'AZ': 'Arizona',
// 'CA': 'California',
// 'ID': 'Idaho',
// 'IN': 'Indiana',
// 'MA': 'Massachusetts',
// 'OK': 'Oklahoma',
// 'PA': 'Pennsylvania',
// 'VA': 'Virginia'

let states = {
  AZ: "Arizona",
  CA: "California",
  ID: "Idaho",
  IN: "Indiana",
  MA: "Massachusetts",
  OK: "Oklahoma",
  PA: "Pennsylvania",
  VA: "Virginia",
};

let case0 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA`;

let case1 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Orville Thomas, 11345 Oak Bridge Road, Tulsa OK
Terry Kalkas, 402 Lans Road, Beaver Falls PA
Eric Adams, 20 Post Road, Sudbury MA
Hubert Sims, 328A Brook Road, Roanoke MA
Amy Wilde, 334 Bayshore Pkwy, Mountain View CA
Sal Carpenter, 73 6th Street, Boston MA`;

// parameters string
// return string
// examples
// pseudo code create a variable to hold each address, trim any whitespace from the string and split it by each new line, then map through that split string and further split it by each comma, take the last element of the array which is the city and state and split it by each space, then create another variable to take the abbreviated state name and find the full name, combine the variable holding the address with the full state name, then sort it based on state name, create another variable to hold the final result, and a variable to hold the last state, check to see if the state is equal to the first element of the address if it is not create a new state name, otherwise append it to the current state name

const byState = (str) => {
  let addrLines = str
    .trim()
    .split("\n")
    .map((addrLine) => {
      addrLine = addrLine.split(", ");
      let final = addrLine.pop().split(" ");
      let currentState = states[final.pop()];
      return [addrLine.concat(final).join(" "), currentState];
    })
    .sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]));
  let result = [],
    lastState = "";
  addrLines.forEach((addrLine) => {
    if (lastState != addrLine[1]) {
      result.push(" " + addrLine[1]);
      lastState = addrLine[1];
    }
    result.push("..... " + addrLine.join(" "));
  });
  return result.join("\r\n").trim();
};

console.log(byState(case0)); // "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"

// console.log(byState(case1)); // "California\r\n..... Amy Wilde 334 Bayshore Pkwy Mountain View California\r\n Massachusetts\r\n..... Eric Adams 20 Post Road Sudbury Massachusetts\r\n..... Hubert Sims 328A Brook Road Roanoke Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Oklahoma\r\n..... Orville Thomas 11345 Oak Bridge Road Tulsa Oklahoma\r\n Pennsylvania\r\n..... Terry Kalkas 402 Lans Road Beaver Falls Pennsylvania\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"
