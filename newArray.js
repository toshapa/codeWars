const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    let topFilm = [];
    arr.forEach(item => {
        let keyArr = Object.values(item)
        keyArr.reduce( (accum, index) => {
            if (typeof(index) === 'number' && index >= 8) {
                topFilm.push(accum);
            }
        })
    })
    return topFilm;
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    let stringfilm = '';
    arr.forEach(element => {
        stringfilm += `${element.name}, `
    });
    stringfilm = stringfilm.slice(0, -2);
    return stringfilm;
}


function setFilmsIds(arr) {
    let newFilm = [];
    arr.forEach((element, key )=> {
        element.id = key
        newFilm.push(element)
    });
    return newFilm;
}


const tranformedArray = setFilmsIds(films);


function checkFilms(arr) {
    console.log(arr.forEach(item => Object.hasOwn(item, 'id')));
}

console.log(checkFilms(tranformedArray));