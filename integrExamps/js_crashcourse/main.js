/*  multi
line
Jeff Jackson
 This is main.js file it will fill examples  and then I save them as a .js
 file the says what's in the examples, like arrays e.g.


comment */
//
//constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

// instantiate object
const person1 = new Person('Ricki', 'Bobby', '4-4-1984');
const person2 = new Person('Mari', 'Joensuu', '3-3-1992');

console.log(person1, person2);
