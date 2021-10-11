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
    movieList = document.querySelectorAll('.promo__interactive-item'),
    movieBlock = document.querySelector('.promo__interactive-list');
// 1)
promoAdvBlocks.forEach(item => item.remove());
// 2)
promoGenre.innerHTML = 'ДРАМА';
// 3)
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
// 4)
// movieDB.movies.sort();
// movieList.forEach((item, i) => item.innerHTML = `${i + 1}. ${movieDB.movies[i]}`);
movieBlock.innerHTML = '';
movieDB.movies.forEach((film, i) => {
    movieBlock.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});

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

'use strict';

// Возьмите свой код из предыдущей практики