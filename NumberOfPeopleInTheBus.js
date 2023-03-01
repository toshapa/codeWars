let number = function(busStops){
    // Good Luck!
    let lastPesangeners = 0;
    
    busStops.forEach(i => {
        lastPesangeners += i[0] - i[1];
    });
    return lastPesangeners;
}



number([[10,0],[3,5],[5,8]]);
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);
number([[0,0]]);