"use strict"

const person = {
    name: 'Alex',
    tel: '89818832422',
    parents: {
        mom: 'Irina',
        dad: 'Boris'
    }
};

console.log(JSON.stringify(person));

// create deep copy
 
const copy = JSON.parse(JSON.stringify(person));
console.log(copy);