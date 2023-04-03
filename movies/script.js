'use strict';

const numberOfFilms = +prompt('How many movies have you watched?', '');

if (numberOfFilms <= 10) {
    alert('It is not much');
} else if (numberOfFilms > 10 && numberOfFilms <= 30) {
    alert('It is OK');
} else if (numberOfFilms > 30) {
    alert('It is a lot of movies');
} else {
    alert('Something went wrong!');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let questionCount = 2;
while (questionCount > 0) {
    const lastMovie = prompt('What is the last movie you watched?', '');
    const lastMovieRate = prompt('How would you rate it?', '');
    if (lastMovie.length == null || lastMovieRate.length == null) continue;
    if (lastMovie.length == 0 || lastMovieRate.length == 0) continue;
    if (lastMovie.length > 50 || lastMovieRate.length > 50) continue;
    personalMovieDB.movies[lastMovie] = lastMovieRate;
    questionCount--;
}

console.log(personalMovieDB);
