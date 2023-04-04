'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    isPrivate: false
};

personalMovieDB.count = numberOfMovies();

detectPersonalLevel(personalMovieDB.count);

personalMovieDB.movies = rememberMyMovies();

personalMovieDB.genres = writeYourGenres();

showMyDB(personalMovieDB, personalMovieDB.isPrivate);


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
        console.log('It is not much');
    } else if (count > 10 && count <= 30) {
        console.log('It is OK');
    } else if (count > 30) {
        console.log('It is a lot of movies');
    } else {
        console.log('Something went wrong!');
    }
}

function showMyDB(DB, dbIsPrivate) {

    if (dbIsPrivate) return;
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
    return rsl;
}
















