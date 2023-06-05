// Ch4113ng3

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// parameters string
// return string
// examples
// pseudo code given a string split it into an array by each character then iterate over the array and check to see if the element is an a, e, l and change the element, join the array back into a string

function nerdify(str) {
  return str
    .split("")
    .map((x) => {
      if (x.toLowerCase() == "a") {
        return (x = "4");
      } else if (x.toLowerCase() == "e") {
        return (x = "3");
      } else if (x == "l") {
        return (x = "1");
      } else {
        return x;
      }
    })
    .join("");
}

// console.log(nerdify("Fund4m3nt41s")); // "Fund4m3nt41s"

// console.log(nerdify("Seven")); // "S3v3n"

// console.log(nerdify("Los Angeles")); // "Los 4ng313s"

// console.log(nerdify("Seoijselawuue")); // "S3oijs314wuu3"
