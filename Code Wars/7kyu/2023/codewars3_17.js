// Help Suzuki rake his garden!

// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

// You will be given a string representing the garden such as:

// garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
// Rake out any items that are not a rock or gravel and replace them with gravel such that:

// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// Returns a string with all items except a rock or gravel replaced with gravel:
// garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

// parameters string
// return string
// examples
// pseudo code given a string split it into an array, then iterate over the array checking each element to see if it is not rock or gravel and changing the element to gravel

let garden1 =
  "slug spider rock gravel gravel gravel gravel gravel gravel gravel";

let garden2 =
  "gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel";

let rakeGarden = (garden) => {
  let arrGarden = garden.split(" ");
  let noBug = arrGarden.map((x) =>
    x != "gravel" && x != "rock" ? (x = "gravel") : x
  );
  return noBug.join(" ");
};

console.log(rakeGarden(garden1)); // 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

console.log(rakeGarden(garden2)); // 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel'
