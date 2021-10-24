"use strict";

// создание функции конструктора, синтаксис ES5
// function User(name, id){
//     //свойства функции
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.sayHello = function(){
//         console.log(`Hello my name is ${this.name}!`);
//     };
// }

// Добавление новых методов с помощью prototype
// User.prototype.exit = function(){
//     console.log(`${this.name} exit out!!!`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 26);

// console.log(ivan);
// console.log(alex);
// alex.sayHello();
// ivan.exit();

//Синтаксис ES6

// class User1 {
//     constructor (name, id){
//         //свойства функции
//         this.name = name;
//         this.id = id;
//         this.human = true;        
//     }

//     sayHello(){
//         console.log(`Hello my name is ${this.name}!`);
//     }
//     exit(){
//         console.log(`${this.name} exit out!!!`);
//     }
// }
// const valery = new User1('Valeriy', 34);
// valery.sayHello();
// valery.exit();

// function showThis(){
//     console.log(this);
// }

// showThis();

// //1. Обычная функция: this = window, если use strict = undefined

// function sumThis(a, b){
//     console.log(this);
//     function sum(){
//         return a + b;
//     }
//     console.log(sum());
// }

// sumThis(4, 5);

// const obj = {
//     a: 7,
//     b: 4,
//     sum: function() {
//         console.log(this);
//     }

// }

// obj.sum();
//2. Контекст у методов объектов: сам объект
//3. This в конструкторах и классах - новый экземпляр объекта.
// function sayName(surName){
//     console.log(this);
//     console.log(`${this.name} ${surName}`);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Butthead');
// sayName.apply(user, ['Butthead']);

// function count(num){
//     return this * num;
// }
// const double = count.bind(2);
// console.log(double(4));
//4. Ручная привязка this: call. apply, bind

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    console.log(this);
});

const obj = {
    num: 5,
    sayNamber: function(){
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNamber();

const double = a => a*2;
//5. В обработчике событий при использовании стрелочной функции контекст this теряется!