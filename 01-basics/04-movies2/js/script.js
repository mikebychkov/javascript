/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1
const adv = document.querySelector('.promo__adv');

// 1.1 REMOVE WHOLE PARENT NODE
// adv.remove();

// 1.2 REMOVE ALL CHILD NODES
// do {
//     adv.firstChild.remove();
// } while (adv.firstChild);

// 1.3 DELETE NODES BY IMG COMBINED SELECTOR
// const advImgs = document.querySelectorAll('.promo__adv img');
// advImgs.forEach(item => item.remove());

// 1.4 MAKE USE OF PARENT NODE INNER-HTML PROPERTY
adv.innerHTML = '';

// 2
document.querySelector('.promo__genre').textContent = 'ДРАМА';

// 3.1
document.querySelector('.promo__bg').style.cssText = 'background-image: url("img/bg.jpg")';

// 3.2
//document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

// 4, 5
const movieListParent = document.querySelector('.promo__interactive-list');

// REMOVING ALL BY SELECTOR
// const movieList = document.querySelectorAll('.promo__interactive-item');
// movieList.forEach(item => item.remove());

// MAKE USE OF PARENT NODE INNER-HTML PROPERTY
movieListParent.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, idx) => {

    // MY FIRST TRY VERSION
    //
    // const newDeleteElem = document.createElement('div');
    // newDeleteElem.classList.add('delete');

    // const newMovieElem = document.createElement('li');
    // newMovieElem.classList.add('promo__interactive-item');
    // newMovieElem.textContent = `${idx + 1}. ${item.toUpperCase()}`;
    // newMovieElem.append(newDeleteElem);

    // movieListParent.append(newMovieElem);

    // AUTHOR VERSION
    //
    movieListParent.innerHTML += `
        <li class="promo__interactive-item">${idx + 1}. ${item.toUpperCase()}
            <div class="delete"></div>
        </li>
    `;
});






























