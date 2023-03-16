function findAverage(array) {
    // your code here
    let sum = 0;
    let shoto = 0;
    array.forEach((element, item ) => {
        sum += element;
        shoto  = item + 1;
    });
    return array.length != 0 ? sum / shoto : 0;
}



console.log(findAverage([1,1,1]));
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))