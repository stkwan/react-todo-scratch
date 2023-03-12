import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoItems() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  // Set value of todos using setTodos
  useEffect(() => {
    const promise = getTodos();
    promise.then((todoList) => setTodos(todoList));
  }, []);

  // Fetch todo list and return it sorted
  const getTodos = async function () {
    try {
      let data = await TODOS;
      let todos = await data;
      return sortByStatus(todos);
    } catch {
      return Promise.reject('There was an error fetching todos.')
    }
  };

  // Sort by incomplete then complete
  const sortByStatus = function (todos) {
    const completed = todos.filter(todo => todo.completed);
    const notCompleted = todos.filter(todo => !todo.completed);
    return [...notCompleted, ...completed];
  }

  // Handle click on label
  const handleLabelClick = function(event) {
    event.preventDefault();
    console.log('hi');
    const id = event.target.getAttribute('for')
    navigate(`/update/${id}`);
  }

  // Map over todos and return JSX for each todo
  const elements = todos.map(todo => {
    let input, label;
    if (todo.completed === true) {
      input = <input type="checkbox" checked disabled id={todo.id} />;
      label = <label className="updateTodo checked" htmlFor={todo.id} onClick={handleLabelClick}>{todo.title} </label>
    } else {
      input = <input type="checkbox" id={todo.id} />;
      label = <label className="updateTodo" htmlFor={todo.id} onClick={handleLabelClick}>{todo.title} </label>
    }
    return (
      <div className="todoItem" key={todo.id}>
        {input}
        {label}
        <button className='deleteButton'>Delete</button>
      </div>
    );
  });

  return (
    <>
      {elements.length > 1 ? elements : <p>There are no todos. Go ahead and add some!</p>}
    </>
  );
}

// Test without any todos
// const TODOS = JSON.stringify([]);

// Test with todos
const TODOS = [
  { id: 1234, title: 'Groceries', description: 'Milk, eggs, bread', date: new Date(2023, 2, 1), completed: true },
  { id: 2345, title: 'Wash Car', description: 'Brown Bear Car Wash', date: new Date(2023, 2, 1), completed: true },
  { id: 3456, title: 'Homework', description: 'Todo app', date: new Date(2023, 2, 31), completed: false },
];
