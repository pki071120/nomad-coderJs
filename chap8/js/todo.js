const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const Todo_Key = "todo";
let todo = [];

function saveTodo() {
  localStorage.setItem(Todo_Key, JSON.stringify(todo));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  todo = todo.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const inputValue = toDoInput.value;
  toDoInput.value = "";
  const newTodoobj = {
    text: inputValue,
    id: Date.now(),
  };
  todo.push(newTodoobj);
  paintToDo(newTodoobj);
  saveTodo();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item) {
  console.log("Ang Gi Mo Chi", item);
}

const savedTodo = localStorage.getItem(Todo_Key);
if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todo = parsedTodo;
  parsedTodo.forEach(paintToDo);
}
