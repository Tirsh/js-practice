"use strict";

class Person{
    constructor (name, age){
        this.name = name;
        this._age = age;
    }

    #surname = 'Vasipov'; //experimental
    
    sayHello(){
        console.log(`My name is ${this.name} ${this.#surname}, I am ${this._age}!`);
    }
    get age(){
        return this._age;
    }
    set age(num){
        if(typeof(num) === 'number' && num > 0 && num < 110){
            this._age = num;
        }else{
            console.log("Wrong value");
        }
    }
    get surname(){
        return this.#surname;
    }   
    set surname(n){
        if(typeof(n) === 'string'){
            this.#surname = n;
        }else{
            console.log("Wrong value");
        }
    }

}

const user = new Person('Valeriy', 35);
user.sayHello();
user.age = 50;
user.sayHello();
user.surname = "BOG";
user.sayHello();