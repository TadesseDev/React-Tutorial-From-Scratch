import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" name="status" id="status" checked={this.props.task.completed} onChange={() => console.log('cliked')} />
        {this.props.task.title}
      </li>
    );
  }
}

export default ToDoItem;