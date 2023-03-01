function disemvowel(str) {
    
    let newStr = ''
    for (let i in str) {
        // console.log(str[i])
        if ('aeoiu'.includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    console.log(newStr);
    return newStr;
    
  }


  disemvowel("This website is for losers LOL!")
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
  disemvowel("What are you, a communist?")