/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg".
Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из
// этого JS файла.
Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */
// * Задания на урок:

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки 
// "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой,
// но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить 
// три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести
// сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoAdv = document.querySelector('.promo__adv'),
        promoAdvBlocks = promoAdv.querySelectorAll('img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        movieBlock = document.querySelector('.promo__interactive-list');

    function removeAdv(){
        // 1)
        promoAdvBlocks.forEach(item => item.remove());
        // 2)
        promoGenre.innerHTML = 'ДРАМА';
        // 3)
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    }
     
     // 4)
    function sortFilms(films, element) {
        films.sort();
        element.innerHTML = '';
        films.forEach((film, i) => {
            element.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        addDelListenner();
    }
    
    // 1,2)
    function addAddListener(){
        const inputFilm = document.querySelector('.adding__input'),
          btn = document.querySelector('button');
        const chbox = document.querySelectorAll('input')[2];
    
        btn.addEventListener('click', event => {
            event.preventDefault();
            let filmName = inputFilm.value;
            if(filmName == '') {
                return;
            } else if (filmName.length >= 21) {
                filmName = filmName.slice(0, 21) +'...';
            }     
            movieDB.movies.push(filmName);
            if(chbox.checked) {
                console.log('Добавляем любимый фильм');
            }
            sortFilms(movieDB.movies, movieBlock);
        });
    }
    
    //3)
    function addDelListenner(){
        const delButtons = document.querySelectorAll('.delete');
        delButtons.forEach(item => item.addEventListener('click', event => {
            event.preventDefault();
            const elementToDelete = +event.target.parentElement.innerText[0]-1;
            delete movieDB.movies[elementToDelete];
            sortFilms(movieDB.movies, movieBlock);
        }));
    }
    
    removeAdv();
    sortFilms(movieDB.movies, movieBlock);
    addAddListener();    
});


