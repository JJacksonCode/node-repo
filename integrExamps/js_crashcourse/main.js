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
comment

//console.log(window.location);

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Coderssons';
ul.lastElementChild.innerHTML = '<h1>Greetings Earthlings</h1>';

const btn = document.querySelector('.btn');
//btn.style.background = 'red';
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
});

console.log(navigator.appName);

*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    alert('Please give up the data!');
  } else {
    console.log('success');
  }

}
