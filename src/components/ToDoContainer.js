import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header';
import InputToDo from './InputToDo'
export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ],
  };
  handleChange = (id) => {
    this.setState(oldState => (
      {
        ...oldState,
        todos: oldState.todos.map(todo => {
          if (todo.id === id) return {
            ...todo,
            completed: !todo.completed
          }
          return todo;
        })
      }
    ));
  }
  delTask = id => {
    this.setState(oldState => ({
      todos: oldState.todos.filter(todo => todo.id !== id)
    }))
    console.log('deleting task ' + id);
  }
  addTask = (title) => {
    console.log(title);
  }
  render() {
    return (
      <div>
        <Header />
        <InputToDo addTask={this.addTask} />
        <ToDoList toDoList={this.state.todos} changeHandlerProp={this.handleChange} deleteHandler={this.delTask} />
      </div>
    )
  }
}
