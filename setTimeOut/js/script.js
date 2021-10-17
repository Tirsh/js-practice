// const timeId = setTimeout(function() {
//     console.log('Hello');
// }, 2000);

// clearInterval(timetId);

const btn = document.querySelector('.btn');
let timeId,
     counter = 0;
// btn.addEventListener('click', () => {
//     // const timeId = setTimeout(logger, 2000);
//     timeId = setInterval(logger, 500);

// });



// function logger(){
//     console.log(`Hello-${counter}`);
//     if (counter == 5) {
//         clearInterval(timeId);
//     }
//     counter++;    
// }

// let id = setTimeout(function log() {
//     console.log('recHello');
//     id = setTimeout(log, 500);
// }, 500);
function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    timeId = setInterval(frame, 50);

    function frame(){
        if(pos == 300){
            clearInterval(timeId);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);
