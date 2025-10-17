// Get the elements
const hero1 = document.querySelector('#hero1');
const todoList = document.querySelector('#todoList');
const addButton = document.querySelector('#addTaskButton');
const input = document.querySelector('#taskInput');

let todoListItems = [];

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  setTimeout(() => {
    hero1.textContent = 'Hello, World!';

    loadList();
  }, 2000);
});


addButton.addEventListener('click', () => {
  console.log('Button clicked');
  if (input.value.trim() !== '') {
    addItem(input.value.trim());
    
    // const li = document.createElement('li');
    // li.textContent = input.value.trim();
    const li = createListElement(input.value.trim());
    todoList.appendChild(li);
    
    input.value = '';
  }
});

function loadList() {
  todoListItems.forEach(item => {
    console.log("dentro de la funcion loadList", item);
    // const li = document.createElement('li');
    // li.textContent = item;
    // todoList.appendChild(li);
    createListElement(item);
  })
}

function addItem(item) {
  todoListItems.push(item);
  console.log("lista de tareas", todoListItems);
}

function createListElement(listLabel) {
  const li = document.createElement('li');
  li.textContent = listLabel;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Eliminar';
  removeButton.click = removeItem(li, listLabel);
  li.appendChild(removeButton);
}