const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");



function paintToDo(todo){
  const li = document.createElement("li");
  const span =document.createElement("span");
  const button = document.createElement("button");
  button.innerText("");

  li.appendChild(span);
  span.innerText = todo;
  toDoList.appendChild(li);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const inputValue=toDoInput.value;
  toDoInput.value="";
  paintToDo(inputValue);
}

toDoForm.addEventListener("submit", handleTodoSubmit);