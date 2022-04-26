import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './ToDoItem.module.scss';

const ToDoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const handleEdit = () => {
    setEditing(true);
  };
  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') { setEditing(false); }
  };

  const {
    changeHandlerProp, task, deleteHandler, setUpdate,
  } = props;
  const { completed, id, title } = task;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const viewMode = {};
  const editMod = {};
  if (editing) { viewMode.display = 'none'; } else { editMod.display = 'none'; }
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => changeHandlerProp(id)}
        />
        <button type="submit" id="xx" onClick={() => deleteHandler(id)} control="">
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMod}
        value={title}
        onChange={(e) => setUpdate(e.target.value, id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

ToDoItem.propTypes = {
  task: PropTypes.node.isRequired,
  changeHandlerProp: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default ToDoItem;
