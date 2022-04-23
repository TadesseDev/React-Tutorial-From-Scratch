function ToDoItem(props) {
  return (
    <li>
      <li key={props.id}>{props.title}</li>
    </li>
  );
}

export default ToDoItem;