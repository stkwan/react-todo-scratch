import React from "react";
import { Link } from 'react-router-dom';
import { todos } from '../data/todos'

export default function NavBar() {
  const getUniqueDates = function(todos) {
    let uniqueDates = [];
    let dates = todos.map(todo => todo.date.toLocaleDateString());
    dates.forEach(date => {
      if (!uniqueDates.includes(date)) {
        uniqueDates.push(date);
      }
    });
    return uniqueDates;
  };
  
  let uniqueDates = getUniqueDates(todos).map(date => date.split('/').join('-'));
  let links = uniqueDates.map(date => {
    return (
      <li key={date}><Link to={'/' + date}>{date}</Link></li>
    );
  })

  return (
    <nav id="nav">
      <ul>
        <li key='all'><Link to="/" >All Todos</Link></li>
        {links}
      </ul>
    </nav>
  );
}