/*  multi
line
Jeff Jackson
 This is main.js file it will fill examples  and then I save them as a .js
 file the says what's in the examples, like arrays e.g.

//
//single  element
const form = document.getElementById('my-form');
const select = document.querySelector('.container');
const letters = document.querySelector('h1');

console.log(form);
console.log(select);
console.log(letters);

// multiple items
console.log(document.querySelectorAll('.item'));
comment */

//console.log(window.location);

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Coderssons';
ul.lastElementChild.innerHTML = '<h1>Greetings Earthlings</h1>';
