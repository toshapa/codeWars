function areYouPlayingBanjo(name) {
    return /r/gi.test(name.slice(0,1)) ? `${name} plays banjo` : `${name} does not play banjo`;
  }


  console.log(areYouPlayingBanjo("rolf"));
  console.log(areYouPlayingBanjo("bravo"));
  console.log(areYouPlayingBanjo("Ringo"));
  console.log(areYouPlayingBanjo("Paul"));
  console.log(areYouPlayingBanjo("Adam"));
