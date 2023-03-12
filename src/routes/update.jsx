import React from 'react';
import { useParams } from 'react-router-dom';
import { todos } from '../data/todos';

export default function Update() {
  const { id } = useParams();
  const todo = todos.filter(todo => todo.id.toString() === id)[0];

  const convertDate = function (date) {
    console.log(date.toLocaleDateString());
    let [month, day, year] = date.toLocaleDateString().split('/');
    if (month.length === 1) {
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }
    return `${year}-${month}-${day}`;
  }

  return (
    <main>
      <h1>Update Todo #<span>{id}</span></h1>
      <form action="">
        <p>
          <label className="userForm" htmlFor="title">Title:</label>
          <input className="userForm" type="text" id="title" name="title" defaultValue={todo.title} />
        </p><br />
        <p>
          <label className="userForm" htmlFor="description">Description:</label>
          <textarea className="userForm" type="text" id="description" name="description" defaultValue={todo.description} />
        </p><br />
        <p>
          <label className="userForm" htmlFor="dueDate">Date:</label>
          <input className="userForm" type="date" id="dueDate" name="dueDate" defaultValue={convertDate(todo.date)} />
        </p><br />
        <button className="saveTodo" type="submit">Submit</button>
      </form>
    </main>
  );
}