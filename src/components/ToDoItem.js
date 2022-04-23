import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <li>
        <li key={this.props.id}>{this.props.title}</li>
      </li>
    );
  }
}

export default ToDoItem;