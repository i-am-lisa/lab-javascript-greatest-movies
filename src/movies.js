// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr) {
    // moviesArr => movies
    let directorsArr = moviesArr.map((movie) => {
      return movie.director;
    });
  
    // always need to return
    console.log(moviesArr.length);
    return directorsArr;
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
    if (moviesArr.length === 0) {
        return 0;
      } 

      let filteredArr = movies.filter(function(elem){
        if (elem.director === "Steven Spielberg" && elem.genre.includes("Drama"))  {
        return true
         }
    })
    
        let numberFilteredArr = filteredArr.length;
 
        return numberFilteredArr;
}

console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
    if (moviesArr.length === 0) {
        return 0;
      } 

      let total = moviesArr.reduce((acc, elem) => {
        if (elem.rate) {
          return acc + elem.rate;
        } else {
          // return the 'acc' as it is to not add anything in it
          return acc;
        }
        
      }, 0);
    

    let average = total / moviesArr.length;
    return average.toFixed(2); // rounded to 2 decimals
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
    if (moviesArr.length === 0) {
        return 0;
      } 

      let filteredArr = moviesArr.filter(function(elem){
        return elem.genre.includes("Drama");
    });
    
    let sumRateDrama = filteredArr.reduce(function (acc, elem) {
        return acc + elem.rate;
    }, 0);
   
    let average = sumRateDrama / filteredArr.length;
    return average.toFixed(2); // rounded to 2 decimals
}

console.log(dramaMoviesRate(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// // deep clone an array 
function orderByYear(moviesArr) {
let cloneMoviesArr =  JSON.parse(JSON.stringify(moviesArr));

//ascending order
   cloneMoviesArr.sort(function(a, b){
        if (a.year > b.year) {
       return 1
        }
    else if (a.year < b.year) {
       return -1
    }
    else {
     return 0
    }
 });
}
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically() {
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
