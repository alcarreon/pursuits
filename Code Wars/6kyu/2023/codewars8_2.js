// Salesman's Travel

// A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

// The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

// "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

// To ease his travel he wants to group the list by zipcode.

// Task
// The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

// zipcode:street and town,street and town,.../house number,house number,...

// The street numbers must be in the same order as the streets where they belong.

// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

// Examples
// r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

// travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

// travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

// travel(r, "NY 5643") --> "NY 5643:/"

const ad =
  "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432," +
  "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000," +
  "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000," +
  "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654," +
  "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000," +
  "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000," +
  "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654," +
  "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200," +
  "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001," +
  "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655," +
  "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655," +
  "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";

// parameters two strings
// return string
// examples
// pseudo code split the zip code by spaces and then create a variable to hold the all the addresses and another to hold the street number, split the given addresses by comas and then iterate through the array only including those that contain the zip code, iterate over the filtered array and remove the last two elements, iterate over the filtered and split array and add the first element to the streetNum and then add a comma in the outer loop, then check to see that we are not in the last element if not add the element to the string with a space if we are at the last element add the element with a space after each time the loop is done add a comma between elements, check to see tht the zip is not emepty and that it is not 5 characters long, if any of these are met return just the zip and :/ otherwise use a string template to return the result in the correct format

function travel(addresses, zip) {
  let splitZip = zip.split(" ");
  let totalAddress = "";
  let streetNum = "/";
  let splitAddress = addresses.split(",");
  let correctAddresses = splitAddress
    .filter((x) => x.includes(zip))
    .map((x, y) => x.split(" ").slice(0, x.split(" ").length - 2));
  correctAddresses.forEach((a, b) => {
    a.forEach((x, y) => {
      if (y == 0) {
        streetNum += x;
      } else if (y < a.length - 1) {
        totalAddress += `${x} `;
      } else {
        totalAddress += `${x}`;
      }
    });
    if (b != correctAddresses.length - 1) {
      streetNum += ",";
      totalAddress += ",";
    }
  });

  if (zip === "" || splitZip[1].length <= 4 || splitZip[1].length >= 6) {
    return `${zip}:/`;
  } else {
    return `${zip}:${totalAddress}${streetNum}`;
  }
}

// console.log(travel(ad, "AA 45522")); // "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670";

// console.log(travel(ad, "EX 34342")); // "EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100";

// console.log(travel(ad, "EX 34345")); // "EX 34345:Pussy Cat Rd. Chicago/100"

// console.log(travel(ad, "AA 45521")); // "AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67"

// console.log(travel(ad, "AE 56215")); // "AE 56215:Main Al. Bern/320"

// console.log(travel(ad, "")); // ":/"

// console.log(travel(ad, "OH 430"));
