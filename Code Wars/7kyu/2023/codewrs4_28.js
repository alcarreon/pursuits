// Duck Shoot - Easy Version

// You've arrived at a carnival and head straight for the duck shooting tent. Why wouldn't you?

// You will be given a set amount of ammo, and an aim rating of between 1 and 0. No your aim is not always perfect - hey maybe someone fiddled with the sights on the gun...

// Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score, then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. You will always shoot left to right.

// Example of start and end duck string with two successful shots:

// Start ---> |~~~~~22~2~~~~~|

// Bang!! Bang!!

// End ---> |~~~~~XX~2~~~~~|

// All inputs will be correct type and never empty.

// parameters 2 integers and a string
// return string
// examples
// pseudo code find the amount of ducks you will be able to shoot by multiplying ammo by aim, then create a variable to act as a counter, and another variable to hold an empty string, iterate over the string and check to see if the character is equal to 2 and that the counter is less than the number of ducks to shoot down

function duckShoot(ammo, aim, ducks) {
  let ducksDown = Math.floor(ammo * aim);
  let counter = 0;
  let holder = "";
  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i] == "2" && counter < ducksDown) {
      counter += 1;
      holder += "X";
    } else {
      holder += ducks[i];
    }
  }
  return holder;
}

console.log(duckShoot(4, 0.64, "|~~2~~~22~2~~22~2~~~~2~~~|")); // '|~~X~~~X2~2~~22~2~~~~2~~~|'

console.log(duckShoot(9, 0.22, "|~~~~~~~2~2~~~|")); // '|~~~~~~~X~2~~~|'

console.log(duckShoot(6, 0.41, "|~~~~~22~2~~~~~|")); // '|~~~~~XX~2~~~~~|'
