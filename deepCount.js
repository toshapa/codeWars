// let count = 0;

function deepCount(a){
    // console.log(a.length);
    return a.reduce((acc, elm) => acc + (Array.isArray(elm) ? deepCount(elm) : 0), a.length);
}


console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
