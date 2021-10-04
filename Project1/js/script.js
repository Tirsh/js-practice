/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';

// Код возьмите из предыдущего домашнего задания

'use strict';

function start(){
    while (numberOfFilms == '' || 
    numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

let numberOfFilms = '';
start();

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(count) {
    let a,b; 
    for (let i = 0; i < count; i++) {
        a = prompt('Один из последних просмотренных фильмов?', "");
        while (true) {
            if (a == null || a == '' || a.length > 50) {
                a = prompt(`Ответ не корректный. 
                Введите один из последних просмотренных фильмов?`, "");
            } else {
                break;
            }
        }
        b = prompt('На сколько оцените его?', "");
        while (true) {
            if (b == null || b == '') {
                b = prompt('Не корректный ответ, введите заново?', "");
            } else {
                break;
            }
        }
        personalMovieDB.movies[a] = b;     

    }
}

rememberMyFilms(2);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        return personalMovieDB;
    }
}

function writeOurGenres() {
    for (let i = 0; i < 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
    }
}

writeOurGenres();

console.log(showMyDB());

const str = 'One new string';
const arr = str.split(' ');
console.log(arr[0]);