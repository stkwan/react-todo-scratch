import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateTodoBar() {

  return (
    <div id="create-todo-bar">
      <h1>Todo List</h1>
      <Link to="/create" >+ Add a new Todo</Link>
    </div>
  );
}