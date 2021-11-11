"use strict";

// new RegExp('patern', 'flags');
// /patern/f

const ans = prompt('Input name');

const reg = /n/ig;
// i - registr
// g - group
// m - multistr

//console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Insert password');
console.log(pass.replace(/./g, '*'));