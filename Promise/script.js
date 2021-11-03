"use strict";

// const reg = new Promise(function(resolve, reject){
//     setTimeout(()=> {
//         console.log('Geting data...');
//         const product = {
//             name: 'TV',
//             price: '100rb',
//         };
//         resolve(product);
//         //reject();
//     }, 2000);
// });

// console.log('Preparing data');

// reg.then((data)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             data.status = 'prepare';
//             resolve(data);
//         },2000);        
        
//     });
// }).then((data)=>{
//     data.modify = 'true';
//     return data;
// }).then(data => console.log(data)).catch(()=>{
//     console.error('Sthg went wrong!!!');
// }).finally(()=>{
//     console.log('Operation over!')
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
};

// test(1000).then(()=> console.log('1000ms'));
// test(2000).then(()=> console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(()=>{
//     console.log('Final!')
// });

Promise.race([test(1000), test(2000)]).then(()=>{
    console.log('Final!')
});