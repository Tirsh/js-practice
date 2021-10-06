/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// Код возьмите из предыдущего домашнего задания

'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    rememberMyFilms: function(count) {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            return personalMovieDB;
        }
    },

    writeOurGenres: function() {
        for (let i = 0; i < 2; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
            if (answer != null && answer != '') {
                this.genres[i] = answer;
            } else {
                i--;
            }
        }
        this.genres.forEach((elem, i) => console.log(`Любимый жанр Номер ${i} - это ${elem}`));
    },

    start: function() {
        let numberOfFilms = '';
        while (numberOfFilms == '' || 
    numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
        this.count = +numberOfFilms;
    },
    toggleVisibleMyDB: function() {
        if (this.privat == true) {
            this.privat = false;
        } else {
            this.privat = true;
        }

    }    
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms(2);

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeOurGenres();

// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.showMyDB());
// console.log('Switch');
// personalMovieDB.toggleVisibleMyDB();
