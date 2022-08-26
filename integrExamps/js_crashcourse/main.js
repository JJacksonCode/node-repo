/*  multi
line
Jeff Jackson
 This is main.js file it will fill examples  and then I save them as a .js
 file the says what's in the examples, like arrays e.g.


comment */
//
//

const x = 71.5;
const y = 11;



if(x > 5 && y > 10) {
  console.log('x is more than 5 or y is more than 10');
} else if(x > 10) {
  console.log('x is greater than 10');
}
else {
  console.log('x is NOT 10, it might be a little less.');
}

const color = x > 10 ? 'red' : 'blue';

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('this one blue');
    break;
  default:
    console.log('color is Neither red NOR blue');
    break;
}
