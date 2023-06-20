// Turn any word into a beef taco
// If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

// Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

// We want to input a word as a string, and return a list representing that word as a taco.

// Key

// all vowels (except 'y') = beef

// t = tomato

// l = lettuce

// c = cheese

// g = guacamole

// s = salsa

// NOTE
// We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

// Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

// Note that no matter what ingredients are passed, our taco will always have a shell.

// parameters string
// return array
// examples
// pseudo code create a variable containing an array of vowels, and then create a variable as a object with the letter representing ingredients, create another variable as an array which has two elements of shell, finally create an empty variable as an array to hold all the ingredients found, convert the string into all lowercases then split it by each character, iterate over the string using foreach and check to see if the element is either a vowel or an ingredient if it is push it to the array holding the ingredients found, use splice to include the array of ingredients between the array containing the shells

function tacofy(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const ingredients = {
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
  };
  let holder = ["shell", "shell"];
  let arrIngredients = [];

  if (str === "") {
    return holder;
  } else {
    str
      .toLowerCase()
      .split("")
      .forEach((x) => {
        if (vowels.includes(x)) {
          arrIngredients.push("beef");
        } else if (ingredients[x] != undefined) {
          arrIngredients.push(ingredients[x]);
        }
      });
  }
  holder.splice(1, 0, ...arrIngredients);

  return holder;
}

console.log(tacofy("")); // ['shell', 'shell']

console.log(tacofy("a")); // ['shell', 'beef', 'shell']

console.log(tacofy("ggg")); // ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell']

console.log(tacofy("ogl")); // ['shell', 'beef', 'guacamole', 'lettuce', 'shell']

console.log(tacofy("ydjkpwqrzto")); // ['shell', 'tomato', 'beef', 'shell']
