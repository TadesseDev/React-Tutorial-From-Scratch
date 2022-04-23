import React, { Component } from 'react'

export default class ToDoList extends Component {
  render() {
    console.log(this.props.toDoList);
    return (
      <ul>{
        this.props.toDoList.map(task => (<li id={task.id}>{task.title}</li>))
      }</ul>
    )
  }
}
