const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('big'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns.forEach(item => item.classList.toggle('red')));

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello'); 
    }
    console.dir(event.target);
});

const btn = document.createElement('button');
btn.classList.add('big');
wrapper.append(btn);