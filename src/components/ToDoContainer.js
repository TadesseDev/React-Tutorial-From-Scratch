import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header';
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
    console.log('deleting task ' + id);
  }
  render() {
    return (
      <div>
        <Header />
        <ToDoList toDoList={this.state.todos} changeHandlerProp={this.handleChange} deleteHandler={this.delTask} />
      </div>
    )
  }
}
