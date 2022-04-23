import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
export default class ToDoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.toDoList.map(task => (<ToDoItem id={task.id} title={task.title} />))
        }
      </ul>
    )
  }
}
