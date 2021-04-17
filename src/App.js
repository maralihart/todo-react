import React, { useState } from 'react';

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
          <li key={index}>
            <button onClick={() => completeTask(index)}>{item}</button>
          </li>)}

        <li>
          <input value={newItem} onChange={changeHandler} /> 
          <button onClick={() => addTask()}>Add New Thing</button>
        </li>
        
      </ul>
    </div>
  );
}

export default App;
