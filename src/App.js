import React, { useState } from 'react';
import TodoItem from './Components/TodoItem';

function App() {
  const [todo, setTodo] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addTask() {
    setTodo(todo.concat(newItem))
    setNewItem("");
  }

  function completeTask(givenIndex) {
    setTodo(todo.filter((item, index) => index !== givenIndex))
  }

  function changeHandler(event) {
    setNewItem(event.target.value);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <ul>

        {todo.map((item, index) => 
          <TodoItem index={index} onClick={() => completeTask(index)} item={item} />
        )}

        <li>
          <input value={newItem} onChange={changeHandler} /> 
          <button onClick={() => addTask()}>Add New Thing</button>
        </li>
        
      </ul>
    </div>
  );
}

export default App;
