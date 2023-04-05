'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    isPrivate: false,
    numberOfMovies: () => {
        this.count = numberOfMovies();
    },
    detectPersonalLevel: () => {
        detectPersonalLevel(this.count);
    },
    rememberMyMovies: () => {
        this.movies = rememberMyMovies();
    },
    writeYourGenres: () => {
        this.genres = writeYourGenres();
    },
    showMyDB: () => {
        showMyDB(this, this.isPrivate);        
    },
    toggleVisibleMyDB: () => {
        this.isPrivate = !this.isPrivate;
    }
};

/*
personalMovieDB.count = numberOfMovies();

detectPersonalLevel(personalMovieDB.count);

personalMovieDB.movies = rememberMyMovies();

personalMovieDB.genres = writeYourGenres();

showMyDB(personalMovieDB, personalMovieDB.isPrivate);
*/

personalMovieDB.numberOfMovies();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyMovies();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

console.log('Toggle visibility and try to show:');
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

console.log('Toggle visibility again and try to show:');
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();


//-------------------------------------------------------------------------------

function numberOfMovies() {

    let rsl;
    while(rsl == null || rsl.trim() == '' || isNaN(rsl)) {
        rsl = prompt('How many movies have you watched?', '');
    }
    return +rsl;
}

function rememberMyMovies() {

    const rsl = {};
    let questionCount = 2;
    while (questionCount > 0) {
        const lastMovie = prompt('What is the last movie you watched?', '');
        const lastMovieRate = prompt('How would you rate it?', '');
        if (lastMovie == null || lastMovieRate == null) continue;
        if (lastMovie.trim() == '' || lastMovieRate.trim() == '') continue;
        if (lastMovie.length > 50 || lastMovieRate.length > 50) continue;
        if (!isNaN(lastMovie)) continue;
        rsl[lastMovie] = lastMovieRate;
        questionCount--;
    }    
    return rsl;
}

function detectPersonalLevel(count) {

    if (count <= 10) {
        console.log(`${count} is not much`);
    } else if (count > 10 && count <= 30) {
        console.log(`${count} is OK`);
    } else if (count > 30) {
        console.log(`${count} is a lot of movies`);
    } else {
        console.log('Something went wrong!');
    }
}

function showMyDB(DB, dbIsPrivate) {

    if (dbIsPrivate) {
        console.log('DB is set to be private.');
        return;
    }
    console.log(DB);
}

function writeYourGenres() {

    let rsl = [];
    let questionCount = 3;
    while (questionCount > 0) {
        const idx = rsl.length;
        const response = prompt(`Enter one of your favorite movie genre #${idx + 1}:`, '');
        if (response == null || response.trim() == '' || !isNaN(response)) continue;
        rsl[idx] = response.trim();
        questionCount--;
    }
    rsl.forEach((item, idx) => {
        console.log(`Favorite movie genre #${idx + 1} is ${item}`);
    });
    return rsl;
}















