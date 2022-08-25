/*  multi
line
Jeff Jackson
 This is main.js file it will fill examples  and then I save them as a .js
 file the says what's in the examples, like arrays e.g.


comment */
//
//

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 1,
    text: 'Meeting with bo$$',
    isCompleted: true
  },
  {
    id: 1,
    text: 'Dentist',
    isCompleted: false
  }
];
// For loop
for(let i = 0; i <= todos.length; i++) {
  console.log(todos[i].text);
}

for(todo of todos) {
  console.log(todo.id);
}
// how to send JSON data to the server
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);
