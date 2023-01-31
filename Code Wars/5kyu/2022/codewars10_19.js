// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const domainName = (str) => {
  str = str.replace("https://", "");
  str = str.replace("http://", "");
  str = str.replace("www.", "");
  return str.split(".")[0];
};

// console.log(domainName("http://google.com")); //  "google"
// console.log(domainName("http://google.co.jp")); // "google"
// console.log(domainName("www.xakep.ru")); // "xakep"
// console.log(domainName("https://youtube.com")); // "youtube"
console.log(domainName("http://www.82lt63screc-1tnndeu5hjiy2g.com")); // 82lt63screc-1tnndeu5hjiy2g
