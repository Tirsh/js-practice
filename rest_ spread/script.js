const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('one', 'two', 'three', 'four');
console.log(...[1, 2, 3]);