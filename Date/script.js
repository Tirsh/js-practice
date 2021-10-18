'use strict';

const now = new Date();

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// now.setHours(18,40);
// console.log(now);

// const pnew = new Date.parse('2001-11-11');

let start = new Date();
for(let i=0; i<10000000;i++){
    let some = i ** 3;
}
let end = new Date();
alert(`Circle works ${end-start}ms`);