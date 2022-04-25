import React from 'react';
import ReactDOM from 'react-dom'
import TodoContainer from './functionBased/components/ToDoContainer'
import { HashRouter } from 'react-router-dom'
import Navbar from './functionBased/components/Navbar'
ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <Navbar />
      <TodoContainer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'));
