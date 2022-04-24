import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.task.completed}
          onChange={() => this.props.changeHandlerProp(this.props.task.id)}
        />
        <button onClick={() => this.props.deleteHandler(this.props.task.id)}>Delete</button>
        {this.props.task.title}
      </li>
    );
  }
}
export default ToDoItem;