const box = document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;
box.getBoundingClientRect();
const style = window.getComputedStyle(box);

console.log(document.documentElement.clientHeight);
window.scrollBy(0,400);
