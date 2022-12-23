// Classy Classes

// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// parameters person class
// return person class
// examples
// pseudo code use constructor to accept name and age, then use a getter function to obtain the result of the callback function, callback function use string literal to use the name and age

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return this.getinfo();
  }
  getinfo() {
    return `${this.name}s age is ${this.age}`;
  }
}

var john = new Person("john", 34);
console.log(john);
console.log(john.info); // 'johns age is 34'
