// const movies = require('./data');


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    const newArr = JSON.parse(JSON.stringify(arr));
    newArr.sort((a,b) => {
        if(a.year < b.year) return -1;
        if(a.year === b.year){
            if(a.title.localeCompare(b.title)<0){
                return -1;
            }
        }
    });
    return newArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
    const newArr = arr.filter(element => {
        if(element.director === 'Steven Spielberg' && element.genre.indexOf('Drama') >= 0) return true;
    });
    return newArr.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let newArr = JSON.parse(JSON.stringify(arr));
    newArr.sort((a,b) => {
        if(a.title < b.title) return -1;
    });
    newArr = newArr.slice(0,20).map(e=>{
        return e.title;
    });
    return newArr;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length === 0) return 0;
    let sumRate = arr.reduce((sum, elem) => {
        if(elem.rate === undefined) return sum;
        return sum += elem.rate;
    },0);
    return parseFloat((sumRate/arr.length).toFixed(2));
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    let count = 0;
    let sumRate = arr.reduce((sum, elem) => { 
        if(elem.genre.indexOf('Drama') >= 0) {
            count++;
            return sum += elem.rate;
        }
        return sum;
    },0);
    if(sumRate === 0) return 0;
    return parseFloat((sumRate/count).toFixed(2));
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
    let newArr = JSON.parse(JSON.stringify(arr));
    let durationTemp = [];
    newArr.forEach(element => durationTemp.push(element.duration.split(' ')));
    durationTemp.map((element, idx) => {
        if(element[0].indexOf('h') > -1){
            let hour = element[0][0]*60;
            if(element[1] === undefined) return newArr[idx].duration = hour;
            if(element[1].length === 5){
                return newArr[idx].duration = parseFloat(element[1].slice(0,2))+hour;
            } else {
                return newArr[idx].duration = parseFloat(element[1].slice(0,1))+hour;
            }
        } else if(element[0].length === 5){
            return newArr[idx].duration = parseFloat(element[0].slice(0,2));
        } else {
            return newArr[idx].duration = parseFloat(element[0].slice(0,1));
        }
    });
    return newArr;
}


turnHoursToMinutes(movies);
// console.log(turnHoursToMinutes(movies));











// BONUS Iteration: Best yearly rate average - Best yearly rate average
