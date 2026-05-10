import './reset.css';
import './App.css';
import TodoLists from './components/TodoLists';
import TodoForm from './components/TodoForm';
import CheckAll from './components/CheckAll';
import Filters from './components/Filters';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
      });

  }, []);
  const addTodo = (todo) => {
    //Upate in Server Side
    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    //Upadate in Client Side UI
    setTodos(prevState => [...prevState, todo]);
  }
  let handleDel=(todoId)=>{
    //Server Side
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: 'DELETE'
    })
    //CLient Side
    setTodos(prevState=>{
      return prevState.filter(todo=>{
        return todo.id !== todoId })
    })
  }
  let handleUpdate=(updatedTodo)=>{
    //Update in Server Side
    fetch(`http://localhost:3001/todos/${updatedTodo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })
    //Client Side
    setTodos(prevState=>{
      return prevState.map(todo=>{
        return todo.id === updatedTodo.id ? updatedTodo : todo
      })
    })
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        <TodoLists todos={todos} handleDel={handleDel} handleUpdate={handleUpdate} />
        <CheckAll />
        <Filters />
      </div>
    </div>
  );
}

export default App;
