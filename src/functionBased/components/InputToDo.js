import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const InputToDo = (props) => {
  const [title, setTitle] = useState('');
  const updateTaskTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTask(title);
      setTitle('');
    } else { alert('pleas enter a valid text'); }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add ToDo..."
        value={title}
        onChange={updateTaskTitle}
        className="input-text"
      />
      <IconContext.Provider
        value={{
          color: 'darkcyan',
          style: { fontSize: '20px' },
          className: 'submit-iconn',
        }}
      >
        <button
          type="submit"
          className="input-submit"
        >
          <FaPlusCircle />
        </button>
      </IconContext.Provider>
    </form>
  );
};
export default InputToDo;
