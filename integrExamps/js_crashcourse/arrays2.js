//JJacksonCode
//array method examples

const items = [
  {},
  {},
  {},
  {},
  {},
  {},
  {}
]

const filteredItems = items.filter((item) => {
  return item.price <= 125
});

console.log(items)
// map ex

items.map(item => item.id)

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
    text: 'Go to Dentist',
    isCompleted: false
  }
];

// forEach, map, filter
const todoText = todos.map(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoText);
// filter
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted)


/*

todos.forEach(function(todo) {
  console.log(todo.text);
});
// For loop
for(let i = 0; i <= todos.length; i++) {
  console.log(todos[i].text);
}

for(todo of todos) {
  console.log(todo.id);
}



*/
// how to send JSON data to the server
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);
