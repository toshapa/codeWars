function nbYear(p0, percent, aug, p) {
    // your code
    let prcOf = percent / 100;
    let year = 0
    let population = p0;
        do {
            year++;
            population = Math.floor(population + (population * prcOf) + aug)
        } while (population < p);
        console.log(year)
        console.log(population)
    return year
}

nbYear(1500, 5, 100, 5000); // 15
nbYear(1500000, 2.5, 10000, 2000000); // 10
nbYear(1500000, 0.25, 1000, 2000000); // 94