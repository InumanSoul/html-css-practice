// Get the elements
const hero1 = document.querySelector('#hero1');
const todoList = document.querySelector('#todoList');
const addButton = document.querySelector('#addTaskButton');
const input = document.querySelector('#taskInput');

let todoListItems = [];

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    hero1.textContent = 'Hello, World!';

    loadList();
  }, 2000);
});


addButton.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    addItem(input.value.trim());
    input.value = '';
    loadList();
  }
});

function loadList() {
  todoListItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    todoList.appendChild(li);
  })
}

function addItem(item) {
  todoListItems.push(item);
}