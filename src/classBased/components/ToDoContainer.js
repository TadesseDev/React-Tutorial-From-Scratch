import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import ToDoList from './ToDoList';
import Header from './Header';
import InputToDo from './InputToDo';
import '../App.css';

export default class TodoContainer extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    if (localStorage.getItem('todos')) {
      this.setState({ todos: JSON.parse(localStorage.getItem('todos')) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  handleChange = (id) => {
    this.setState((oldState) => (
      {
        ...oldState,
        todos: oldState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }
    ));
  }

  delTask = (id) => {
    this.setState((oldState) => ({
      todos: oldState.todos.filter((todo) => todo.id !== id),
    }));
    console.log(`deleting task ${id}`);
  }

  addTask = (title) => {
    this.setState((oldState) => ({
      todos: [
        ...oldState.todos,
        {
          id: uuid(),
          title,
          completed: false,
        }],
    }));
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) { todo.title = updatedTitle; }
          return todo;
        }),
      ],
    });
  }

  render() {
    return (
      <div id="container">
        <div className="inner">
          <Header />
          <InputToDo addTask={this.addTask} />
          <ToDoList
            toDoList={this.state.todos}
            changeHandlerProp={this.handleChange}
            deleteHandler={this.delTask}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
