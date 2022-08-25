//console.log('Hola compadres!!!');
//console.error('Bruh, this is an error.');
//console.warn('Let this be a warning to ya');
// let, const
// let reassigns vals, const is constant

// string, numbs, bool, null, undefined
const age = '40-something';
let score = 31;
score = 41;
console.log('Age is: ', age);
console.log(score);

const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

//concatenation in a hat
var name = 'some person '
var i = 45;
var j = 37;
var result = i + j;

console.log('Once upon a time ' + name + 'added 2 integers. Result was: ' + result);

const s = 'Hello mundoworld!';
console.log(s.length);

console.log(s.substring(0, 5).toUpperCase());

// arrays
const fruits = ['apples', 'oranges', 'bananas', 'metsä-marjat'];

/*  multi
line
comment */
console.log(fruits);
console.log(fruits[3]);
fruits[4] ='mustikka';
console.log(fruits[4]);
fruits.push('mangos');
console.log(fruits);
fruits.unshift('jordgubbar');
console.log(fruits);
