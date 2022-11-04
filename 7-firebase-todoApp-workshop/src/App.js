import './App.css';
import React from 'react';
import Title from './components/Title';
import AddTodo from './components/AddToDo';
import Todo from './components/ShowToDo';
// import packages from firebase
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {db} from './firebase';

function App() {
  const [todos, setTodos] = React.useState([]);

  // fetch data using useEffect
  React.useEffect(() => {
    // 2. write the query, collection accept 2 param (database, collection name)
    const q = query(collection(db, 'todos'));
    // 3. You can listen to a document using onSnapshot method. An initial call using the callback
    // you provide to create the document snapshot immediately with the current content
    // of the single document. Then each time the content change, another call updates the document snapshot
    const unsub = onSnapshot(q, (querySnapshot) => {
      // create a temporary array to store the todos
      let todosArray = [];
      // push each todo to the temporary array
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id});
      });
      // update todo state to update UI
      setTodos(todosArray);
    });
    // return the snapshot (array)
    return () => unsub();
    //[] means it will only run once
  }, []);

  // the 3 function
  // update the doc to see if the todo is editted
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, 'todos', todo.id), {title: title});
  };
  // update the doc if it is completed or not
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {completed: !todo.completed});
  };
  // update the doc to see if the todo is delted
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
