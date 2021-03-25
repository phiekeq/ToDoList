const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const todoInput = document.querySelector('.todo_input');
todoButton.addEventListener('click', todo);

function todo()
{
    event.preventDefault();
    let list = document.createElement("li");
    let inputValue = todoInput.value;
    let text = document.createTextNode(inputValue);
    list.appendChild(text);
    if (inputValue === '') {
        alert("You have to write something!");
    }
    else {
        todoList.appendChild(list).classList.add("todo");
    }
    todoInput.value = "";
}
const 
