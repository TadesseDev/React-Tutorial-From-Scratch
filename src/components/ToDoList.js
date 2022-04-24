import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
export default class ToDoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.toDoList.map(task => (
            <ToDoItem
              key={task.id}
              task={task}
              changeHandlerProp={this.props.changeHandlerProp}
              deleteHandler={this.props.deleteHandler}
            />
          ))
        }
      </ul>
    )
  }
}
