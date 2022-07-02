// Driving Licence
// Task
// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
// Rules
// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"

data1 = ["John", "James", "Smith", "01-Jan-2000", "M"];

data2 = ["Johanna", "", "Gibbs", "13-Dec-1981", "F"];

data3 = ["Andrew", "Robert", "Lee", "02-September-1981", "M"];

const driver = (arr) => {
  if (arr[2].length < 5) {
    for (let i = arr[2].length; i < 5; i++) {
      arr[2] += 9;
    }
  }
  console.log(arr[2]);
  let decade = arr[3].split("-")[2][2];
  console.log(decade);
  if (arr[4] == "F") {
    console.log(new Date(arr[3]).getMonth());
    let month = new Date(arr[3]).getMonth() + 51;
    console.log(month);
  } else {
    let month = new Date(arr[3].getMonth() + 1);
    console.log();
  }
  let day = arr[3].split("-");
  console.log(day[0]);
  let;
};

// console.log(driver(data1));
console.log(driver(data2));
// console.log(driver(data3));
