function removeEveryOther(arr){
    //your code here
    let secondArr = [];
    for (let newArr in arr) {
        if (newArr % 2 == 0) {
            secondArr.push(arr[newArr])
        }
    }
    return secondArr;
  }

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))