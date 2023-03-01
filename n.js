function amountOfPages(summary) {
    let str = '';
    let num = 0;

    for (let value = 1; value <= summary; value++) {
        str += value;
        console.log(str.length);
        if (summary === str.length) {
            num = value
            break
        }    
    }
    return num;
}


amountOfPages(185);
console.log(amountOfPages(1095));
console.log(amountOfPages(25));
// amountOfPages(5);
// amountOfPages(660);
