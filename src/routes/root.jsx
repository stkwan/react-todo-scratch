import React, { useState, useEffect } from 'react';

export default function Root() {
  return (
    <>
      <NavBar />
      <Main />
    </>  
  );
}

function NavBar() {
  return (
    <nav id="nav">
      <ul>
        <li>All Todos</li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <main id="main">
      <CreateTodoBar />
      <TodoList />
    </main>
  );
}

function CreateTodoBar() {
  return (
    <div id="create-todo-bar">
      <h1>Todo List</h1>
      <button type="button">+ Add a new Todo</button>
    </div>
  );
}

function TodoList() {
  let list;
  if (!list) {
    list = "There are no todos. Add something!"
  }

  return (
    <div id='todoList'>
      <TodoItems />
    </div>
  );
}

function TodoItems() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let promise = getTodos();
    promise.then((todoList) => setTodos(todoList));
  }, []);

  let getTodos = async function() {
    let data = await TODOS;
    let todos = await JSON.parse(data);
    console.log(todos);
    let completed = todos.filter(todo => todo.completed);
    let notCompleted = todos.filter(todo => !todo.completed);
    return [...notCompleted, ...completed];
  };

  let elements = (function getElements() {
    let elements = todos.map(todo => {
      let input;
      let label;
      if (todo.completed === true) {
        input = <input type="checkbox" checked disabled id={todo.id}/>;
        label = <label htmlFor={todo.id} className="checked">{todo.title}</label>
      } else {
        input = <input type="checkbox" id={todo.id}/>;
        label = <label htmlFor={todo.id}>{todo.title}</label>
      }
      return (
        <div className="todoItem" key={todo.id}>
          {input}
          {label}
        </div>
      );
    });
    return elements;
  })();

  return (
    <>
      {elements.length > 1 ? elements : <p>There are no todos. Go ahead and add some!</p>}
    </>
  );
}


// const TODOS = JSON.stringify([]);

const TODOS = Promise.resolve(JSON.stringify([
  {id: 1234, title: 'Groceries', description: 'Milk, eggs, bread', date: new Date(2023, 2, 23), completed: true},
  {id: 2345, title: 'Wash Car', description: 'Brown Bear Car Wash', date: Date.now(), completed: false},
  {id: 3456, title: 'Homework', descripotion: 'Todo app', date: Date.now(), completed: false}, 
]));