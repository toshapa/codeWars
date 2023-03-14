function getSum(a,b){
    let count = 0;
    if (a == b) return a;
    if(a < b){
      for (; a <= b; a++){
        count += a;
      }
    } else if (a > b){
        for(; b <= a; b++){
          count += b;
        }
    }
    return count;
  }


// console.log(getSum(2, 2));
console.log(getSum(0, 1));
// console.log(getSum(0,-1));
// console.log(getSum(5, -1));
console.log(getSum(-35, -624));