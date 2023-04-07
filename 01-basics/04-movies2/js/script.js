'use strict';

document.addEventListener('DOMContentLoaded', () => { // TO LOAD SCRIPT AFTER PAGE ALL READY

    /* Задания на урок:

    1) Удалить все рекламные блоки со страницы (правая часть сайта)

    2) Изменить жанр фильма, поменять "комедия" на "драма"

    3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    Реализовать только при помощи JS

    4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    Отсортировать их по алфавиту 

    5) Добавить нумерацию выведенных фильмов */


    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...'
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

    function showMovies() {

        const movieListParent = document.querySelector('.promo__interactive-list');

        // REMOVING ALL BY SELECTOR
        // const movieList = document.querySelectorAll('.promo__interactive-item');
        // movieList.forEach(item => item.remove());

        // MAKE USE OF PARENT NODE INNER-HTML PROPERTY
        movieListParent.innerHTML = '';

        movieDB.movies = movieDB.movies.map(m => m.toLowerCase());

        movieDB.movies.sort();

        movieDB.movies.forEach((item, idx) => {

            // // MY FIRST TRY VERSION
            // //
            // const newDeleteElem = document.createElement('div');
            // newDeleteElem.classList.add('delete');
            // newDeleteElem.addEventListener('click', movieListDelete_Click);

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

        const movieListDelete_Click = event => {

            let movieName = event.target.parentElement.textContent.trim();
            const idxStart = movieName.indexOf('. ') + 2;
            movieName = movieName.slice(idxStart);

            const idxDelete = movieDB.movies.indexOf(movieName.toLowerCase());
            if (idxDelete > -1) {
                movieDB.movies.splice(idxDelete, 1);
                showMovies();
            }
        };

        const listElements = movieListParent.querySelectorAll('.delete');
        listElements.forEach(e => e.addEventListener('click', movieListDelete_Click));

    }
    showMovies();


    /* Задания на урок:

    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"

    5) Фильмы должны быть отсортированы по алфавиту */


    // 1, 2

    const addForm = document.querySelector('.add');
    const movieInput = addForm.querySelector('.adding__input');
    const movieInputButton = addForm.querySelector('button');

    const movieInputButton_Click = event => {
        event.preventDefault();
        
        let newMovieName = movieInput.value;
        newMovieName = newMovieName.length > 21 ? newMovieName.slice(0,21) + '...' : newMovieName;
        movieInput.value = '';

        movieDB.movies.push(newMovieName);
        showMovies();

        const favCheckBox = addForm.querySelector('.yes').previousElementSibling;
        // const favCheckBox = addForm.querySelector('[type="checkbox"]');
        if (favCheckBox.checked) {
            console.log('Добавляем любимый фильм');
            favCheckBox.checked = false;
        }    
    };

    movieInputButton.addEventListener('click', movieInputButton_Click);


});