import React from 'react'
import ToDoItem from './ToDoItem'
const ToDoList = (props) => {
  return (
    <ul>
      {
        props.toDoList.map(task => (
          <ToDoItem
            key={task.id}
            task={task}
            changeHandlerProp={props.changeHandlerProp}
            deleteHandler={props.deleteHandler}
            setUpdate={props.setUpdate}
          />
        ))
      }
    </ul>
  )
}

export default ToDoList;