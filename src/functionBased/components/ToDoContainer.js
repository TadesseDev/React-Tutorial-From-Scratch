import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Route, Switch } from 'react-router-dom';
import ToDoList from './ToDoList';
import Header from './Header';
import InputToDo from './InputToDo';
import '../App.scss';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

const TodoContainer = () => {
  function getInitialTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
      const currentTask = todo;
      if (currentTask.id === id) { currentTask.completed = !currentTask.completed; }
      return currentTask;
    }));
  };
  const delTask = (id) => {
    setTodos((oldState) => (
      oldState.filter((todo) => todo.id !== id)
    ));
  };
  const addTask = (title) => {
    setTodos((oldState) => ([
      ...oldState,
      {
        id: uuid(),
        title,
        completed: false,
      }]
    ));
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map((todo) => {
      const currentTask = todo;
      if (currentTask.id === id) { currentTask.title = updatedTitle; }
      return currentTask;
    }));
  };

  return (
    <Switch>
      <Route exact path="/">
        <div id="container">
          <div className="inner">
            <Header />
            <InputToDo addTask={addTask} />
            <ToDoList
              toDoList={todos}
              changeHandlerProp={handleChange}
              deleteHandler={delTask}
              setUpdate={setUpdate}
            />
          </div>
        </div>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  );
};

export default TodoContainer;
