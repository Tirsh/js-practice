"use strict";

// alert('Hello!');
// const msg = confirm("Are you here?");
// console.log(msg);
// const answer = +prompt('Are you 18?', "No");
// console.log(typeof(answer));
// const answers = [];
// answers[0] = prompt("Name:", "");
// answers[1] = prompt("Surname:", "");
// answers[2] = +prompt("Age:", "0");
// document.write(answers);
// const user = 'Valeriy';
// alert(`Привет, ${user}!!!`);
// const arr = [1, 2];
// console.log(arr.length);
let incr = 10,
    decr = 10;
incr++;
decr--;

console.log(incr);
console.log(decr);

showFirstMessage();
function showFirstMessage(){
    console.log('Hello World!!!');
}
const double = a => a * 2;
console.log(double(5));

const obj = {
    name: 'Test',
    data: '21.10.1980',
    num: 132,
    color: {
        background: 'red',
        border: 'white'
    }
}

for (let key in obj) {
    if (typeof(obj[key]) == 'object') {
        for (let i in obj[key]) {
            console.log(`Property ${i}: have meaning ${obj[key][i]}`);
        }
    } else {       
        console.log(`Property ${key}: have meaning ${obj[key]}`);
    }
}

const arr = [1, 2, 3, 4, 5];
let a = arr.pop();
console.log(a);
console.log(arr);
arr.forEach(function (item, i, arr) {
    item * 2;

})