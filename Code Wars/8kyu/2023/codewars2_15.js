// Did she say hallo?
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// parameters
// string

// return
// boolean

// examples

// pseudo code
// create an object to hold the translations then iterate over each key in the object normalizing the case of the strings to lower case and then see if it is in the string

let validateHello = (greetings) => {
  let greet = {
    hello: "english",
    ciao: "italian",
    salut: "french",
    hallo: "german",
    hola: "spanish",
    ahoj: "czech republic",
    czesc: "polish",
  };
  for (key in greet) {
    if (greetings.toLowerCase().includes(key)) {
      return true;
    }
  }
  return false;
};

// console.log(validateHello("ahoj")); //true
// console.log(validateHello("meh")); //false
console.log(
  validateHello(
    "ARE; yoU WiE Pasa. HOW VIsta, hasTa; Hombre TscHuSS: yOu? cZESC. tsChUss. Hello WIe, bien. ciaO: Hasta WIE? Wie: How: la; BIeN? vIsTA"
  )
);
