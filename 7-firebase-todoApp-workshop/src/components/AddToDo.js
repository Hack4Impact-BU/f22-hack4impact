import React from 'react';
import {db} from '../firebase';
import {collection, addDoc} from 'firebase/firestore';

export default function AddTodo() {
  // 1. create a useState hook
  const [title, setTitle] = React.useState('');

  // 3. Create the function, reason why we use async so it will not
  // interrupt any other tasks
  const handleSubmit = async (e) => {
    //prevent any reload when resubmit the form
    e.preventDefault();
    // check if user has given input, or else we wil not executive code
    if (title !== '') {
      // put them into the database, and add the collection name 'todos'
      await addDoc(collection(db, 'todos'), {
        // data should be given as an object
        title,
        completed: false,
      });
      // after storing, you would want to clear the input
      setTitle('');
    }
  };
  return (
    // 2. Create a form
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          // this will be the title state so we can store into database
          value={title}
          // this will update the state when user give an input
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}
