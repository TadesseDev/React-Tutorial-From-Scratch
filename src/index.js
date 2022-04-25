import React from 'react';
import ReactDOM from 'react-dom'
import TodoContainer from './functionBased/components/ToDoContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
