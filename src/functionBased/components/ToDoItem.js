import React, { Component } from 'react';
import styles from "./ToDoItem.module.css"
class ToDoItem extends Component {

  state = {
    editing: false,
  }

  handleEdit = () => {
    this.setState({
      editing: true,
    })
  }
  handleUpdateDone = (e) => {
    if (e.key === 'Enter')
      this.setState({ editing: false });
  }

  componentWillUnmount() {
    console.log('deleting todo item: ', this.props.id)
  }
  render() {
    const { completed, id, title } = this.props.task;
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const viewMode = {};
    const editMod = {};
    if (this.state.editing)
      viewMode.display = 'none';
    else
      editMod.display = 'none'
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => this.props.changeHandlerProp(id)}
          />
          <button onClick={() => this.props.deleteHandler(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMod}
          value={title}
          onChange={(e) => this.props.setUpdate(e.target.value, id)}
          onKeyDown={this.handleUpdateDone} />
      </li>
    );
  }
}
export default ToDoItem;