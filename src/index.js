import React from 'react';
import ReactDOM from 'react-dom'
import TodoContainer from './functionBased/components/ToDoContainer'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './functionBased/components/Navbar'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
