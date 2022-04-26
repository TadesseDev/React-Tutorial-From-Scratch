import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
  const {
    toDoList, changeHandlerProp, deleteHandler, setUpdate,
  } = props;
  return (
    <ul>
      {
        toDoList.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            changeHandlerProp={changeHandlerProp}
            deleteHandler={deleteHandler}
            setUpdate={setUpdate}
          />
        ))
      }
    </ul>
  );
};
ToDoList.propTypes = {
  toDoList: PropTypes.node.isRequired,
  changeHandlerProp: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default ToDoList;
