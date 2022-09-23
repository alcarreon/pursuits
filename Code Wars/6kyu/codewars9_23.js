// Which filetypes are you using the most?

// Description
// You've been working with a lot of different file types recently as your interests have broadened.

// But what file types are you using the most? With this question in mind we look at the following problem.

// Given a List/Array of Filenames (strings) files return a List/Array of string(s) containing the most common extension(s). If there is a tie, return a sorted list of all extensions.

// Important Info:
// Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
// Filenames and extensions will only contain letters (case sensitive), and numbers.
// If a file has multiple extensions (ie: mysong.mp3.als) only count the last extension (.als in this case)
// Examples
// files = ['Lakey - Better days.mp3',
//          'Wheathan - Superlove.wav',
//          'groovy jam.als',
//          '#4 final mixdown.als',
//          'album cover.ps',
//          'good nights.mp3']
// would return: ['.als', '.mp3'], as both of the extensions appear two times in files.

// files = ['Lakey - Better days.mp3',
//          'Fisher - Stop it.mp3',
//          'Fisher - Losing it.mp3',
//          '#4 final mixdown.als',
//          'album cover.ps',
//          'good nights.mp3']
// would return ['.mp3'], because it appears more times then any other extension, and no other extension has an equal amount of appearences.

const solve = (arr) => {
  let extensions = arr.map((x) => x.slice(x.lastIndexOf(".")));
  const countedExtensions = extensions.reduce((allExt, ext) => {
    const currCount = allExt[ext] ?? 0;
    return {
      ...allExt,
      [ext]: currCount + 1,
    };
  }, {});

  let arrExt = Object.entries(countedExtensions);
  let sortedExt = arrExt.sort((x, y) => y[1] - x[1]);
  if (arr.length == 0) {
    return [];
  } else if (sortedExt[0][1] === sortedExt[1][1]) {
    let didIt = sortedExt.filter((x) => x[1] == sortedExt[0][1]);
    didIt.sort((x, y) => {
      if (x[0] < y[0]) {
        return -1;
      }
      if (x[0] > y[0]) {
        return 1;
      }
      return 0;
    });

    return didIt.map((x) => x[0]);
  } else {
    return [sortedExt[0][0]];
  }
};

// console.log(
//   solve([
//     "Lakey - Better days.mp3",
//     "Wheathan - Superlove.wav",
//     "groovy jam.als",
//     "#4 final mixdown.als",
//     "album cover.ps",
//     "good nights.mp3",
//   ])
// ); // ['.als', '.mp3']

// console.log(
//   solve([
//     "Lakey - Better days.mp3",
//     "Fisher - Stop it.mp3",
//     "Fisher - Losing it.mp3",
//     "#4 final mixdown.als",
//     "album cover.ps",
//     "good nights.mp3",
//   ])
// ); // ['.mp3']

// console.log(
//   solve([
//     "direful.pr",
//     "festive.html",
//     "historical.wav",
//     "holistic.mp3",
//     "impossible.jar",
//     "gentle.cpp",
//     "gleaming.xml",
//     "inconclusive.js",
//     "erect.jar",
//     "befitting.mp3",
//     "brief.wp",
//     "beautiful.jar",
//     "energetic.pt",
//     "careful.wp",
//     "defective.cpp",
//     "icky.wav",
//     "gorgeous.txt",
//     "good.pt",
//     "fat.pt",
//     "bored.als",
//     "adaptable.cpp",
//     "fumbling.exe",
//     "grieving.wp",
//     "efficient.wav",
//     "fearful.xml",
//     "damp.html",
//     "erect.exe",
//     "annoyed.xml",
//     "elderly.ala",
//     "far-flung.txt",
//     "careful.mp3",
//     "actually.pt",
//     "cynical.ala",
//     "complex.exe",
//     "extra-small.pt",
//     "enchanted.ala",
//     "amazing.html",
//     "bashful.h",
//     "hallowed.html",
//     "entertaining.html",
//     "bad.js",
//     "illegal.maya",
//     "deadpan.html",
//     "furtive.wp",
//     "hanging.css",
//     "drunk.py",
//     "capricious.wav",
//     "damaging.Ue4",
//     "cool.Ue4",
//     "ambitious.css",
//     "fortunate.wp",
//     "electric.mp3",
//     "crowded.txt",
//     "cooperative.html",
//     "graceful.pt",
//     "aboard.pt",
//     "exclusive.als",
//     "glossy.css",
//     "fluffy.pt",
//     "cluttered.txt",
//     "halting.cpp",
//     "glib.cpp",
//     "aback.pr",
//     "cynical.Ue4",
//     "chilly.xml",
//     "hideous.ala",
//     "finicky.txt",
//     "feigned.ala",
//     "better.Ue4",
//     "dear.py",
//     "available.xml",
//     "easy.pr",
//     "fine.mp3",
//     "cowardly.jar",
//     "incredible.css",
//     "adhesive.exe",
//     "energetic.mp3",
//     "harmonious.exe",
//     "general.als",
//     "condemned.als",
//     "flawless.als",
//     "curvy.h",
//     "ambitious.mp3",
//     "disillusioned.xml",
//     "bitter.h",
//     "hanging.wp",
//     "certain.cpp",
//     "flashy.html",
//     "cuddly.pr",
//     "cagey.Ue4",
//     "extra-small.pr",
//     "amuck.cpp",
//     "direful.html",
//     "delightful.als",
//     "helpless.h",
//     "foamy.mp3",
//     "enthusiastic.maya",
//     "good.maya",
//     "adhesive.css",
//     "imperfect.pr",
//     "bent.cpp",
//     "exultant.zbrush",
//     "adorable.mp3",
//     "clammy.maya",
//     "gaudy.pt",
//     "blushing.css",
//     "cuddly.Ue4",
//     "curved.py",
//     "boring.html",
//     "broken.txt",
//     "daily.jar",
//     "giddy.xml",
//     "curved.css",
//     "future.maya",
//     "graceful.css",
//     "guiltless.maya",
//     "gentle.cpp",
//     "few.css",
//     "calculating.txt",
//     "clear.pr",
//     "grey.py",
//     "entertaining.ala",
//     "elfin.txt",
//     "excited.js",
//     "abject.zbrush",
//     "best.js",
//     "boundless.wav",
//     "hurried.ala",
//     "delirious.cpp",
//   ])
// ); // ['.cpp', '.html']

// console.log(solve([])); // []
