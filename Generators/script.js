"use strict";

// function* generator(){
//     yield 'a';
//     yield 'b';
//     yield 'c';
//     yield 'f';
// }

// const g = generator();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

function* counter(n){
    for(let i = 0; i < n; i++){
        yield i;
    }
}

const c = counter(10);
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);
for(let i of c){
    console.log(i);
}
