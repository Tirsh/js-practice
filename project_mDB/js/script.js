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

const promoAdv = document.querySelector('.promo__adv'),
    promoAdvBlocks = promoAdv.querySelectorAll('img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    movieList = document.querySelectorAll('.promo__interactive-item');
// 1)
promoAdvBlocks.forEach(item => item.remove());
// 2)
promoGenre.innerHTML = 'ДРАМА';
// 3)
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
// 4)
movieDB.movies.sort();
movieList.forEach((item, i) => item.innerHTML = `${i + 1}. ${movieDB.movies[i]}`);