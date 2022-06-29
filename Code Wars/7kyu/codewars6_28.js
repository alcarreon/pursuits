// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// parameters array
// returns number
// examples
// pseudo code reduce through the array checking if the current element is a number if it is add it to the accumelated value otherwise subtract from it

let divCon = (x) => {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - +cur),
    0
  );
};

// console.log(divCon([9, 3, "7", "3"])); // 2
// console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 14
// console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 13

// Find an employees role in the company
// You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

// You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

// The array is preloaded and can be referenced using the variable employees ($employees in Ruby). It uses the following structure.

// parameters array of objects
// returns string
// examples
// pseudo code given  a string split it by spaces to and the the elements from index 0 to first name and the elements from index 1 to last name, then use these to filter the array of employees and see if one matches, if one does match access the role property and return it otherwise return a string saying 'Does not work here!'

let employees = [
  { firstName: "Ollie", lastName: "Hepburn", role: "Boss" },
  { firstName: "Morty", lastName: "Smith", role: "Truck Driver" },
  { firstName: "Peter", lastName: "Ross", role: "Warehouse Manager" },
  { firstName: "Cal", lastName: "Neil", role: "Sales Assistant" },
  { firstName: "Jesse", lastName: "Saunders", role: "Admin" },
  { firstName: "Anna", lastName: "Jones", role: "Sales Assistant" },
  { firstName: "Carmel", lastName: "Hamm", role: "Admin" },
  { firstName: "Tori", lastName: "Sparks", role: "Sales Manager" },
  { firstName: "Peter", lastName: "Jones", role: "Warehouse Picker" },
  { firstName: "Mort", lastName: "Smith", role: "Warehouse Picker" },
  { firstName: "Anna", lastName: "Bell", role: "Admin" },
  { firstName: "Jewel", lastName: "Bell", role: "Receptionist" },
  { firstName: "Colin", lastName: "Brown", role: "Trainee" },
];

const findEmployeesRole = (str) => {
  let first = str.split(" ")[0];
  let last = str.split(" ")[1];
  let hasRole = employees.filter(
    (x) => x.firstName == first && x.lastName == last
  );
  return hasRole.length == 0 ? "Does not work here!" : hasRole[0].role;
};

console.log(findEmployeesRole("Dipper Pines")); // "Does not work here!"
console.log(findEmployeesRole("Morty Smith")); // "Truck Driver"
console.log(findEmployeesRole("Anna Bell")); // "Admin"
