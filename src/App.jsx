import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './routes/root';
import Create from './routes/create';
import NavBar from './components/NavBar';
import Update from './routes/update';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
