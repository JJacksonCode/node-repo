//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);

// getElementById('id')
//console.log(document.getElementById('header-title'));
var headerTtile = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTtile);
// headerTtile.textContent = 'Moikka kaikialle.';
console.log(headerTtile.textContent);
// headerTtile.innerHTML = '<h3>Smaller title</h3>';
header.style.borderBottom = 'solid 3px #000';

// getElementsByClassName('className')
var li = document.getElementsByTagName('li');
console.log(li[1]);
li[1].textContent = 'Hello Deux';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i = 0; i < items.length; i++) {
  li[i].style.backgroundColor = '#f4f4f4';
}
