'use strict';

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".heart"),
    heart = document.querySelector(".heart"),
    wrapper = document.querySelector('.wrapper');

console.dir(box);

box.style.backgroundColor = 'yellow';
box.style.width = "50px";

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => item.style.backgroundColor = 'green');

const div = document.createElement('div');
const text = document.createTextNode('I was here!');

div.classList.add('black');
document.body.append(div);
// document.body.appendChild(div);
document.querySelector('.wrapper').append(div);
wrapper.prepend(div);
hearts[0].before(div);
hearts[1].after(div);
// wrapper.insertBefore(div, hearts[0]);
circles[1].remove();
// wrapper.removeChild(hearts[1]);
circles[1].replaceWith(hearts[0]);
// wrapper.replaceChild(circles[1], hearts[0]);

div.innerHTML = '<h1>Hello World!!!</h1>';
// div.textContent = "Hello";
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');