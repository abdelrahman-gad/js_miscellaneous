// create an array contains 5 different random numbers

// method 1
let a1 = Array.from({length:5}, n => Math.random() );

console.log('1',a1);


let a2  = new Array(5).fill(1).map(n=>Math.random());
console.log('2',a2);