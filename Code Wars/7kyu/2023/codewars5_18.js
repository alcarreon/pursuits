// Interactive Dictionary

// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana

// parameters object
// return object
// examples
// pseudo code define an empty object within the constructor, use newEntry to create an object, on the look method check to see if the key is part of an object

class Dictionary {
  constructor() {
    this.dict = {};
  }

  newEntry(key, value) {
    this.dict[key] = value;
  }

  look(key) {
    return this.dict[key] || `Can\'t find entry for ${key}`;
  }
}

let d = new Dictionary();

d.newEntry("Apple", "A fruit");

console.log(d);

let b = new Dictionary();
console.log(d.look("Apple")); // 'A fruit'

b.newEntry("Soccer", "A sport");

console.log(b.look("Soccer")); // 'A sport'

console.log(b.look("Ball")); // 'Can\'t find entry for Ball'
