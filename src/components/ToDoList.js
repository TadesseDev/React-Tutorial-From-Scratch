import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
export default class ToDoList extends Component {
  render() {
    return (
      <ul>
        <h1>counter from parent is {this.props.counter}</h1>
        {
          this.props.toDoList.map(task => (<ToDoItem id={task.id} title={task.title} />))
        }</ul>
    )
  }
}
