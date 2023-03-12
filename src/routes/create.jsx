import React from 'react';

export default function Create() {
  return (
    <main>
      <h1>Create New Todo</h1>
      <form action="">
        <p>
          <label className="userForm" htmlFor="title">Title:</label>
          <input className="userForm" type="text" id="title" name="title"/>
        </p><br />
        <p>
          <label className="userForm" htmlFor="description">Description:</label>
          <textarea className="userForm" type="text" id="description" name="description"/>
        </p><br />
        <p>
          <label className="userForm" htmlFor="dueDate">Date:</label>
          <input className="userForm" type="date" id="dueDate" name="dueDate"/>
        </p><br />
        <button className="saveTodo" type="submit">Submit</button>
      </form>
    </main>
  );
}