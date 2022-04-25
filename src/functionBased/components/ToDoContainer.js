import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import ToDoList from './ToDoList';
import Header from './Header';
import InputToDo from './InputToDo';
import '../App.css';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import { Route, Switch } from 'react-router-dom';

const TodoContainer = (props) => {
  function getInitialTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) { todo.completed = !todo.completed; }
      return todo;
    }));
  };
  const delTask = (id) => {
    setTodos((oldState) => (
      oldState.filter((todo) => todo.id !== id)
    ));
    console.log(`deleting task ${id}`);
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
      if (todo.id === id) { todo.title = updatedTitle; }
      return todo;
    }));
  };

  return (
    //  <Routes>
    //     <Route path="/" element={} />
    //     <Route path="/about" element={<About index />} />
    //     <Route path="*" element={<NotMatch />} />
    //   </Routes>
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
