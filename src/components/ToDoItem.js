import React, { Component } from 'react';
import styles from "./ToDoItem.module.css"
class ToDoItem extends Component {
  render() {
    const { completed, id, title } = this.props.task;
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.changeHandlerProp(id)}
        />
        <button onClick={() => this.props.deleteHandler(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}
export default ToDoItem;