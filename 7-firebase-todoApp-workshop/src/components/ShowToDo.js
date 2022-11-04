import React from 'react';
// import icons from materials icon
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// we will add props to this componenets, so we are defining props now
export default function Todo({todo, toggleComplete, handleDelete, handleEdit}) {
  // 1. make title state to store to-do title
  // useState hook
  const [newTitle, setNewTitle] = React.useState(todo.title);

  //3. write function for handling change
  const handleChange = (e) => {
    e.preventDefault();
    // e prevent page from reloading
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = '';
      setNewTitle(e.target.value);
    }
  };
  return (
    // 2. create class names
    // if todo is completed, it will strike through it
    <div className="todo">
      <input
        style={{textDecoration: todo.completed && 'line-through'}}
        type="text"
        // if todo title is empty, it will show new title
        value={todo.title === '' ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          // toggle complete will change false to true and vice versa
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
