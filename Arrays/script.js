"use strict";

//filter
// const names = ['Valeriy', 'Anastasiya', 'Boris', 'Devid', 'Ksenia'];
// const sortNames = names.filter(function(name){
//     return name.length <= 5;
// });
// console.log(sortNames);

// //map
// const answers = ['AnnA', 'HeLlo', 'coRRection'];
// const result = answers.map(function(answer){
//     return answer.toLowerCase();
// });
// console.log(result);

//every/some

// const some = [3, '122', '3'];
// console.log(some.some(item => typeof(item) == 'number'));
// console.log(some.every(item => typeof(item) == 'number'));

//reduce
// const arr = [1, 3, 5, 8, 9];
// const res = arr.reduce((sum, current)=> sum + current);
// console.log(res);

const obj = {
    'Ivan': 'person',
    'Anna': 'person',
    'dog': 'animal',
    'cat': 'animal'
};

const newObj = Object.entries(obj)
.filter(item => item[1] == 'person')
.map(item => item[0]);
console.log(newObj);

