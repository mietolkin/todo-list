// // 

// const toDoInput = document.querySelector('.toDo-input');
// const toDoButton = document.querySelector('.toDo-button');
// const toDoList = document.querySelector('.toDo-list');
// const filterOption = document.querySelector('.filter-todo');

// // const btnDelete = document.querySelector('.delete-btn');

// //


// const deleteTodo = function (e) {
//     const item = e.target;
//     // console.log(item)
//     if (item.classList[0] === 'delete-btn') {

//         const todo = item.parentElement;
//         console.log('COMON');

//         //transition remove
//         todo.classList.add('falling');
//         removeLocalTodos(todo);
//         todo.addEventListener('transitionend', function () {
//             todo.remove();
//         });
//         // todo.remove();

//     } else if (item.classList[0] === "complete-btn") {

//         const todo = item.parentElement;
//         console.log('COMON');
//         todo.classList.toggle('completed')

//     }


// }


// // 
// const addToDo = function (event) {
//     event.preventDefault();
//     console.log('hello motherfucker');


//     // local storage

//     saveLocalTodos(toDoInput.value);

//     //creating todo Div
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');

//     //creating li
//     const newTodo = document.createElement('li');
//     newTodo.innerText = toDoInput.value;
//     newTodo.classList.add('toDo-item');
//     todoDiv.appendChild(newTodo);

//     // complite button 
//     const complitedButton = document.createElement('button');
//     complitedButton.innerHTML = '<i class="fas fa fa-check"> </li>';
//     complitedButton.classList.add("complete-btn");
//     todoDiv.appendChild(complitedButton);

//     // delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = '<i class="fas fa fa-trash"> </li>';
//     deleteButton.classList.add("delete-btn");
//     todoDiv.appendChild(deleteButton);


//     toDoList.prepend(todoDiv)

//     toDoInput.value = "";



// }



// // Creating filter
// function filterTodo(e) {
//     const todos = toDoList.childNodes;
//     // console.log(todos);
//     todos.forEach(function (todo) {

//         console.log(e.target.value);

//         if (todo.classList !== undefined) {
//             switch (e.target.value) {
//                 case "all":
//                     todo.style.display = "flex";
//                     break;
//                 case "completed":
//                     if (todo.classList.contains("completed")) {
//                         todo.style.display = "flex";
//                     } else {
//                         todo.style.display = "none";
//                     }
//                     break;

//                 case "uncompleted":
//                     if (!todo.classList.contains("completed")) {
//                         todo.style.display = 'flex';
//                     } else {
//                         todo.style.display = "none";
//                     }
//                 default:
//                     break;

//             }
//         }
//         return;
//     });

// };



// function saveLocalTodos(todo) {
//     // check if it already has;

//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// function getToDos() {
//     // check if it already has;

//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }


//     localStorage.setItem('todos', JSON.stringify(todos));

//     // console.log(todos);

//     todos.forEach(function (todo) {
//         //creating todo Div
//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('todo');

//         //creating li
//         const newTodo = document.createElement('li');
//         newTodo.innerText = todo;
//         newTodo.classList.add('toDo-item');
//         todoDiv.appendChild(newTodo);

//         // complite button 
//         const complitedButton = document.createElement('button');
//         complitedButton.innerHTML = '<i class="fas fa fa-check"> </li>';
//         complitedButton.classList.add("complete-btn");
//         todoDiv.appendChild(complitedButton);

//         // delete button
//         const deleteButton = document.createElement('button');
//         deleteButton.innerHTML = '<i class="fas fa fa-trash"> </li>';
//         deleteButton.classList.add("delete-btn");
//         todoDiv.appendChild(deleteButton);


//         toDoList.prepend(todoDiv)
//     })
// }

// function removeLocalTodos(todo) {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }


//     const todoIndex = todo.children[0].innerText;
//     console.log(todos.indexOf(todoIndex))
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// //


// document.addEventListener('DOMContentLoaded', getToDos)

// toDoButton.addEventListener('click', addToDo);

// toDoList.addEventListener('click', deleteTodo);

// filterOption.addEventListener('click', filterTodo);


// ///////////////////////////////////////////////////////



// 

const toDoInput = document.querySelector('.toDo-input');
const toDoButton = document.querySelector('.toDo-button');
const toDoList = document.querySelector('.toDo-list');
const filterOption = document.querySelector('.filter-todo');

// const btnDelete = document.querySelector('.delete-btn');

//


const deleteTodo = function (e) {
    const item = e.target;
    // console.log(item)
    if (item.classList[0] === 'delete-btn') {

        const todo = item.parentElement;

        //transition remove
        todo.classList.add('falling');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });


    } else if (item.classList[0] === "complete-btn") {

        const todo = item.parentElement;
        todo.classList.toggle('completed')

    }


}


// 
const addToDo = function (event) {
    event.preventDefault();

    // local storage

    saveLocalTodos(toDoInput.value);

    //creating todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //creating li
    const newTodo = document.createElement('li');
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add('toDo-item');
    todoDiv.appendChild(newTodo);

    // complite button 
    const complitedButton = document.createElement('button');
    complitedButton.innerHTML = '<i class="fas fa fa-check"> </li>';
    complitedButton.classList.add("complete-btn");
    todoDiv.appendChild(complitedButton);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa fa-trash"> </li>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);


    toDoList.prepend(todoDiv)

    toDoInput.value = "";



}



// Creating filter
function filterTodo(e) {
    const todos = toDoList.childNodes;
    // console.log(todos);
    todos.forEach(function (todo) {

        console.log(e.target.value);

        if (todo.classList !== undefined) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;

                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                default:
                    break;

            }
        }
        return;
    });

};



function saveLocalTodos(todo) {
    // check if it already has;

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getToDos() {
    // check if it already has;

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }


    localStorage.setItem('todos', JSON.stringify(todos));

    // console.log(todos);

    todos.forEach(function (todo) {
        //creating todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //creating li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('toDo-item');
        todoDiv.appendChild(newTodo);

        // complite button 
        const complitedButton = document.createElement('button');
        complitedButton.innerHTML = '<i class="fas fa fa-check"> </li>';
        complitedButton.classList.add("complete-btn");
        todoDiv.appendChild(complitedButton);

        // delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa fa-trash"> </li>';
        deleteButton.classList.add("delete-btn");
        todoDiv.appendChild(deleteButton);


        toDoList.prepend(todoDiv)
    })
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }


    const todoIndex = todo.children[0].innerText;
    console.log(todos.indexOf(todoIndex))
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

//


document.addEventListener('DOMContentLoaded', getToDos)

toDoButton.addEventListener('click', addToDo);

toDoList.addEventListener('click', deleteTodo);

filterOption.addEventListener('click', filterTodo);


//////