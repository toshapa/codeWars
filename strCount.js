function strCount(str, letter){  
    let count = 0;
    for (let el of str) {
        if (el === letter) {
            count++
        }
    }
    return count
}

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));