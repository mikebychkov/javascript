'use strict';

const numberOfFilms = prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt('What is the last move you watched?', '');
const lastMovieRate = prompt('How would you rate it?', '');

personalMovieDB.movies[lastMovie] = lastMovieRate;

document.write(personalMovieDB);
console.log(personalMovieDB);
