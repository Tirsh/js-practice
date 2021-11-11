'use strict';

localStorage.setItem('name', 'Valeriy');
const nn = localStorage.getItem('name');
console.log(nn);
localStorage.removeItem(nn);

const check = document.querySelector('#checkbox');
if(localStorage.getItem('checked')){
    check.checked = true;
}
check.addEventListener('change', ()=>{
    //localStorage.removeItem('checked');
    if(check.checked){
        localStorage.setItem('checked', true);
    }else{
        localStorage.setItem('checked', false);
    }

});