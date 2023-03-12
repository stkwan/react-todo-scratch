import React from 'react';
import CreateTodoBar from '../components/CreateTodoBar';
import TodoList from '../components/TodoList';

export default function Main() {
  return (
    <main>
      <CreateTodoBar />
      <TodoList />
    </main>
  );
}