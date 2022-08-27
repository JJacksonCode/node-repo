
// object  built  in const person
//

const  person = {
  firstName: 'Bobby',
  lastName: 'Coderssons',
  age: 31,
  hobbies: ['music', 'sports', 'drums', 'Cuban salsa'],
  address: {
    street: '50 Hundred Main St',
    city: 'Anytown',
    state: 'TX'
  }
}
console.log(person.firstName, person.lastName);

const { firstName, lastName, address: { city }} = person;
console.log(person);
person.email = 'bobbi.coderssons@cmail.com';
console.log(person);
console.log(`${person.firstName}`);
