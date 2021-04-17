# Creating a To-Do App with React.JS

1. Download [Node.js](https://nodejs.org/en/)
2. `npx create-react-app todo-list`
3. `cd todo-list`
4. `npm start`
5. Open `App.js` and clean it up
6. Add a basic template in `App.js`
```
function App() {
  const todo = ["task 1", "task 2"];

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todo.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
```
7. Make buttons