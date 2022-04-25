import React, { useState } from 'react';
import styles from "./ToDoItem.module.css"
const ToDoItem = (props) => {

  const [editing, setEditing] = useState(false)
  const handleEdit = () => {
    setEditing(true)
  }
  const handleUpdateDone = (e) => {
    if (e.key === 'Enter')
      setEditing(false);
  }

  // const componentWillUnmount() {
  //   console.log('deleting todo item: ', props.id)
  // }
  const { completed, id, title } = props.task;
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  const viewMode = {};
  const editMod = {};
  if (editing)
    viewMode.display = 'none';
  else
    editMod.display = 'none'
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.changeHandlerProp(id)}
        />
        <button onClick={() => props.deleteHandler(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMod}
        value={title}
        onChange={(e) => props.setUpdate(e.target.value, id)}
        onKeyDown={handleUpdateDone} />
    </li>
  );
}
export default ToDoItem;