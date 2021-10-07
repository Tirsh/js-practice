'use strict';

const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button");
console.log(btns);

const circles = document.getElementsByClassName("circle");
console.log(circles);

const hearts = document.querySelectorAll(".heart");
hearts.forEach( item => {
    console.log(item);
});

function removeAllBefore(values, b) {
    const str = values.join('');
    const nw = str.slice(str.indexOf(''+b));
    return nw.split('').map( index => +index);
}

console.log(removeAllBefore([1, 2, 3, 4, 5], 3));