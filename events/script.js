const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');
// console.log(btn);
// btn.onclick = function() {
//     alert('Hello World!!!');

// };()
// btn.addEventListener('click', function() {
//     alert('Hello World!!!');
// })

// const deleteElement = (event) => {
//     event.target.remove();
// };

// btn. addEventListener('click', deleteElement);

// let i = 0;
const someFunc = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);

    // i++;
    // if(i == 1){
    //     btn.removeEventListener('click', someFunc);
    // }
};

btn.addEventListener('click', someFunc);
overlay.addEventListener('click', someFunc);

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});