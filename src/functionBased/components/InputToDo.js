import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
const InputToDo = props => {
  const [title, setTitle] = useState("");
  const updateTaskTitle = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTask(title);
      setTitle("");
    }
    else
      alert('pleas enter a valid text');
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add ToDo..."
        value={title} onChange={updateTaskTitle}
        className="input-text" />
      <button
        type="submit"
        className="input-submit">< FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} /></button>
    </form >
  )
}
export default InputToDo