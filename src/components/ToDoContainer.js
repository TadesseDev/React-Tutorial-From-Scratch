import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header';
import InputToDo from './InputToDo'
import { v4 as uuid } from 'uuid'
import '../App.css'
export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuid(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuid(),
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
    this.setState(oldState => ({
      todos: [
        ...oldState.todos,
        {
          id: uuid(),
          title: title,
          completed: false
        }]
    }))
  }
  render() {
    return (
      <div id="container">
        <div className="inner">
          <Header />
          <InputToDo addTask={this.addTask} />
          <ToDoList toDoList={this.state.todos} changeHandlerProp={this.handleChange} deleteHandler={this.delTask} />
        </div>
      </div>
    )
  }
}
