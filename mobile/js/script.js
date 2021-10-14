// touchstart
// touchmove
// touchend
// touchleave
// touchcancel

window.addEventListener('DOMContentLoader', () => {
    

    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (event) =>{
        event.preventDefault();
        console.log('start');
    } );

    
});